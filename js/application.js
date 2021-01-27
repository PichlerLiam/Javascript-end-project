const container = document.querySelector(".container");
let inputValue = document.querySelector(".input");
const add = document.querySelector(".add");
let provTodos = window.localStorage.getItem("todos");
let todos = provTodos == null ? [] : JSON.parse(provTodos);

updateLocalStorage();

console.log(todos);
todos.forEach(todo => createItem(new Item(todo.name)));

add.addEventListener("click", addItem);

function addItem() {
    if (inputValue.value) {
        let item = new Item(inputValue.value);
        todos.push(item);
        createItem(item);
        updateLocalStorage();
        inputValue.value = "";
    }
}

function updateLocalStorage() {
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addItem();
    }
});
