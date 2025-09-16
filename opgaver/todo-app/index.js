// Opretter et tomt array til at gemme alle opgaver
const toDoArr = []

// Finder input-feltet hvor brugeren skriver opgaven
const input = document.querySelector("#to_do_name_input");

// Finder containeren (<ul>), hvor opgaverne skal vises
const todoContainer = document.querySelector("#todoContainer");

// Finder submit-knappen
const submit = document.querySelector("#submit");

// Når knappen klikkes, kør funktionen subMitTodo
submit.addEventListener("click", subMitTodo);

// Funktion der tilføjer en ny opgave
function subMitTodo(evt) {
    // Stopper standardadfærden for knappen (form reload)
    evt.preventDefault();

    // Opretter et objekt med info om opgaven
    const todoObj = {
        name: input.value,             // Teksten brugeren skrev
        id: self.crypto.randomUUID(),  // Unikt id til opgaven
        done: false,                   // Status: opgaven er ikke færdig
        important: false
    };

    // Tilføjer den nye opgave forrest i arrayet
    toDoArr.unshift(todoObj);

    // Tjek i konsollen, at opgaven blev tilføjet korrekt
    console.log("toDoArr 1", toDoArr);

    // Opdaterer visningen af opgaverne i browseren
    writeTodos();

    // Rydder input-feltet, så brugeren kan skrive en ny opgave
    input.value = "";
}

// Funktion der viser alle opgaver i browseren
function writeTodos() {
    // Tømmer containeren, så vi kan tegne listen på ny
    todoContainer.innerHTML = "";

    // Gennemgår alle opgaver i arrayet
    toDoArr.forEach((todoObj) => {
        // Sætter checkbox til "checked", hvis opgaven er færdig
        let isChecked = todoObj.done ? "checked" : "";
        let isImportant = todoObj.important ? "checked" : "";

        // Tilføjer HTML for en opgave til containeren
        todoContainer.innerHTML +=
            `<li data-id=${todoObj.id}>
                <h2>${todoObj.name}</h2>
                <input type="checkbox" name="todoCheck" ${isChecked} />
                <input type="checkbox" id ="important" name="important-box" ${todoObj.important ? "checked" : ""}/>
                <label for="important" class="star"></label>
            </li>`;
    });


    // Lægger event listener på hver checkbox
    todoContainer.querySelectorAll("li").forEach(li => {
        const checkBox = li.querySelector("input[name='todoCheck']");

        checkBox.addEventListener("click", () => {
            // Finder opgaven i arrayet, som svarer til denne li
            const corrospondingDataObj = toDoArr.find(toDo => toDo.id == li.dataset.id);

            // Skift status: færdig -> ikke færdig og omvendt
            corrospondingDataObj.done = !corrospondingDataObj.done;

            // Tjek i konsollen
            console.log("corrospondingDataObj", corrospondingDataObj);
            console.log("toDoArr ", toDoArr);

            // Opdater visningen, så ændringen kan ses
            writeTodos();

        });

        const importantBox = li.querySelector("input[name='important-box']");
        if (importantBox) { // tjek at den findes
            importantBox.addEventListener("click", () => {
                const correspondingDataObj = toDoArr.find(toDo => toDo.id == li.dataset.id);
                correspondingDataObj.important = !correspondingDataObj.important;

                writeTodos();
            });
        }
    });
}





//liste over tilføjelser;
// slet knap
//slet collumn, hvor man kan se alle slettede
//done collumn, hvor man kan se alle done
//knap til "order" (alphabetisk-rækkefølge, random-rækkefølge eller vigtig-rækkefølge)
//sæt det der huske function ind








































/*

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

// 1. Når vi submitter formen
form.addEventListener("submit", (e) => {
  e.preventDefault(); // undgå at siden genindlæser

  const text = input.value.trim();
  if (text === "") return;

  addTask(text);
  input.value = ""; // ryd inputfeltet
});

// 2. Funktion til at tilføje en opgave
function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  // Klik = marker som færdig
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Slet-knap
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}
*/