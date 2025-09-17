// Et tomt array til to-do opgaver
const toDoArr = [];


const input = document.querySelector("#to_do_name_input");
const todoContainer = document.querySelector("#todoContainer");
const doneContainer = document.querySelector("#doneContainer");
const submit = document.querySelector("#submit");

// Hent gemte opgaver fra localStorage
const savedTasks = localStorage.getItem("toDoArr");
// Hvis der er gemte opgaver, tilføj dem til arrayet
if (savedTasks) {
    toDoArr.push(...JSON.parse(savedTasks));
    writeTodos(); // Vis de gemte opgaver på siden
}

// Når brugeren klikker på submit, kald funktionen subMitTodo
submit.addEventListener("click", subMitTodo);


// Funktion til at gemme hele toDoArr i localStorage
function saveToLocalStorage() {
    localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
}

// Funktion der kaldes når brugeren trykker på submit
function subMitTodo(evt) {
    evt.preventDefault(); // Stopper formens standard submit (reload)
    if (!input.value.trim()) return; // Ignorer tomme input

    // Opret et objekt for opgaven
    const todoObj = {
        name: input.value,       // Teksten fra input-feltet
        id: crypto.randomUUID(), // Unikt id til opgaven
        done: false,
        important: false
    };

    toDoArr.unshift(todoObj); // Tilføj opgaven forrest i arrayet
    input.value = "";          // Ryd input-feltet
    saveToLocalStorage();      // Gemmer i localStorage
    writeTodos();              // Opdater listen i DOM (html'et)
}


// Funktion der viser alle opgaver i browseren
function writeTodos() {
    // Tømmer begge containere først
    todoContainer.innerHTML = "";
    doneContainer.innerHTML = "";

    //tilføjer overskrifter til sectionerne
    //to do
    const todoHeader = document.createElement("h3");
    todoHeader.textContent = "ToDo";
    todoContainer.appendChild(todoHeader);

    //done
    const doneHeader = document.createElement("h3");
    doneHeader.textContent = "Done";
    doneContainer.appendChild(doneHeader);

    // Sortér array: vigtig først, færdig nederst
    const sortedTasks = toDoArr.slice().sort((a, b) => {
        // a vigtig, b ikke -> a først
        if (a.important && !b.important) return -1;
        // b vigtig -> b først
        if (!a.important && b.important) return 1;
        // ellers ingen ændring
        return 0;
    });


    // Loop gennem hver opgave
    sortedTasks.forEach(task => {
        const li = document.createElement("li"); // Opret <li> til opgaven
        li.dataset.id = task.id;                 // Gem opgavens id 

        const h2 = document.createElement("h2"); // Opret <h2> til opgavens tekst
        h2.textContent = task.name;             // Sæt teksten til opgavens navn

        // --- DONE checkbox og label ---
        // Opret checkbox og type
        const doneCheckbox = document.createElement("input");
        doneCheckbox.type = "checkbox";
        // markerer som cheched hvis done
        doneCheckbox.checked = task.done;
        //navn til css
        doneCheckbox.name = "done-box";
        // Unikt id
        doneCheckbox.id = `done-${task.id}`;
        // Skjul rigtige checkbox så iconerne kan ses
        doneCheckbox.style.display = "none";

        // Label til ikonet, forbinder det med checkboxen og tilføjer css class til ikonet
        const doneLabel = document.createElement("label");
        doneLabel.htmlFor = `done-${task.id}`;
        doneLabel.classList.add("doneLabel");

        // Når checkbox ændres
        doneCheckbox.addEventListener("change", () => {
            // Opdater status
            task.done = doneCheckbox.checked;

            saveToLocalStorage();

            // Opdater DOM         
            writeTodos();
        });

        // --- IMPORTANT checkbox og label ---
        const importantCheckbox = document.createElement("input");
        //markerer den som checkbox
        importantCheckbox.type = "checkbox";
        //hvis checkboks markeres som vigtig, skal det være checket
        importantCheckbox.checked = task.important;
        //tilføjer et navn til den så jeg kan style den i css
        importantCheckbox.name = "important-box";
        //tilføjer id
        importantCheckbox.id = `important-${task.id}`;
        //skjoler boksen så kun ikonet kan ses
        importantCheckbox.style.display = "none";

        const importantLabel = document.createElement("label");
        //knytter label til checkbox
        importantLabel.htmlFor = `important-${task.id}`;
        //giver label et "stjerne"-class så jeg kan tilføje ikonet i css
        importantLabel.classList.add("star");

        importantCheckbox.addEventListener("change", () => {
            //opdaterer task
            task.important = importantCheckbox.checked;
            saveToLocalStorage();
            writeTodos();
        });

        // --- DELETE label (icon) ---
        const deleteLabel = document.createElement("label");
        //giver label et class så jeg kan tilføje ikonet i css
        deleteLabel.classList.add("deleteLabel");

        deleteLabel.addEventListener("click", () => {
            const index = toDoArr.findIndex(t => t.id === task.id); // Find opgaven i array
            if (index > -1) {
                toDoArr.splice(index, 1);  // Slet opgaven
                saveToLocalStorage();
                writeTodos();
            }
        });

        // --- Append alle elementer til li (sætter elementet ind som "sidste barn" i andet element)---
        li.appendChild(h2);
        li.appendChild(doneCheckbox);
        li.appendChild(doneLabel);
        li.appendChild(importantCheckbox);
        li.appendChild(importantLabel);
        li.appendChild(deleteLabel);

        // Tilføj li til containeren
        //todoContainer.appendChild(li);
        if (task.done) {
            doneContainer.appendChild(li);
        } else {
            todoContainer.appendChild(li);
        }
    });
}