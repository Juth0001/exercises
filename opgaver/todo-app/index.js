// --- 1. Array til opgaver ---
// Et tomt array til at gemme alle to-do opgaver
const toDoArr = [];

// --- 2. Find elementer i DOM ---
// Input-felt hvor brugeren skriver opgaven
const input = document.querySelector("#to_do_name_input");
// Container (<ul>) hvor opgaverne skal vises
const todoContainer = document.querySelector("#todoContainer");
// Submit-knappen til at tilføje en opgave
const submit = document.querySelector("#submit");

// --- 3. Load fra localStorage ---
// Hent gemte opgaver fra localStorage
const savedTasks = localStorage.getItem("toDoArr");
// Hvis der er gemte opgaver, tilføj dem til arrayet
if (savedTasks) {
    toDoArr.push(...JSON.parse(savedTasks));
    writeTodos(); // Vis de gemte opgaver på siden
}

// --- 4. Event listener for submit ---
// Når brugeren klikker på submit, kald funktionen subMitTodo
submit.addEventListener("click", subMitTodo);

// --- 5. Gem til localStorage ---
// Funktion til at gemme hele toDoArr i browserens localStorage
function saveToLocalStorage() {
    localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
}

// --- 6. Tilføj ny opgave ---
// Funktion der kaldes når brugeren tilføjer en opgave
function subMitTodo(evt) {
    evt.preventDefault(); // Stopper formens standard submit (reload)
    if (!input.value.trim()) return; // Ignorer tomme input

    // Opret et objekt for opgaven
    const todoObj = {
        name: input.value,       // Teksten fra input-feltet
        id: crypto.randomUUID(), // Unikt id til opgaven
        done: false,             // Status for færdig
        important: false         // Status for vigtig
    };

    toDoArr.unshift(todoObj); // Tilføj opgaven forrest i arrayet
    input.value = "";          // Ryd input-feltet
    saveToLocalStorage();      // Gem arrayet i localStorage
    writeTodos();              // Opdater listen i DOM
}

// --- 7. Tegn listen ---
// Funktion der viser alle opgaver i browseren
function writeTodos() {
    todoContainer.innerHTML = ""; // Tøm containeren først

    // Sortér array: vigtig først, færdig nederst
    const sortedTasks = toDoArr.slice().sort((a, b) => {
        if (a.important && !b.important) return -1; // a vigtig, b ikke -> a først
        if (!a.important && b.important) return 1;  // b vigtig -> b først
        if (!a.done && b.done) return -1;           // a ikke færdig, b færdig -> a først
        if (a.done && !b.done) return 1;            // a færdig -> b først
        return 0;                                   // ellers ingen ændring
    });

    // Loop gennem hver opgave
    sortedTasks.forEach(task => {
        const li = document.createElement("li"); // Opret <li> til opgaven
        li.dataset.id = task.id;                 // Gem opgavens id som data-attribut

        const h2 = document.createElement("h2"); // Opret <h2> til opgavens tekst
        h2.textContent = task.name;             // Sæt teksten til opgavens navn

        // --- DONE checkbox og label ---
        const doneCheckbox = document.createElement("input"); // Opret checkbox
        doneCheckbox.type = "checkbox";                       // Type checkbox
        doneCheckbox.checked = task.done;                    // Marker som checked hvis done
        doneCheckbox.name = "done-box";                      // Navn til CSS
        doneCheckbox.id = `done-${task.id}`;                 // Unikt id
        doneCheckbox.style.display = "none";                // Skjul den rigtige checkbox

        const doneLabel = document.createElement("label");   // Label til ikonet
        doneLabel.htmlFor = `done-${task.id}`;              // Forbind label til checkbox
        doneLabel.classList.add("doneLabel");               // CSS-klasse til ikonet

        // Når checkbox ændres
        doneCheckbox.addEventListener("change", () => {
            task.done = doneCheckbox.checked; // Opdater status
            saveToLocalStorage();             // Gem i localStorage
            writeTodos();                     // Opdater DOM
        });

        // --- IMPORTANT checkbox og label ---
        const importantCheckbox = document.createElement("input");
        importantCheckbox.type = "checkbox";
        importantCheckbox.checked = task.important;
        importantCheckbox.name = "important-box";
        importantCheckbox.id = `important-${task.id}`;
        importantCheckbox.style.display = "none";

        const importantLabel = document.createElement("label");
        importantLabel.htmlFor = `important-${task.id}`;
        importantLabel.classList.add("star");

        importantCheckbox.addEventListener("change", () => {
            task.important = importantCheckbox.checked;
            saveToLocalStorage();
            writeTodos();
        });

        // --- DELETE label (icon) ---
        const deleteLabel = document.createElement("label"); // Label bruges som ikon
        deleteLabel.classList.add("deleteLabel");           // CSS-klasse til delete
        deleteLabel.htmlFor = `delete-${task.id}`;          // kan bruge id
        deleteLabel.addEventListener("click", () => {
            const index = toDoArr.findIndex(t => t.id === task.id); // Find opgaven i array
            if (index > -1) {
                toDoArr.splice(index, 1);  // Slet opgaven
                saveToLocalStorage();      // Gem ændring i localStorage
                writeTodos();              // Opdater DOM
            }
        });

        // --- Append alle elementer til li ---
        li.appendChild(h2);
        li.appendChild(doneCheckbox);
        li.appendChild(doneLabel);
        li.appendChild(importantCheckbox);
        li.appendChild(importantLabel);
        li.appendChild(deleteLabel);

        // Tilføj li til containeren
        todoContainer.appendChild(li);
    });
}