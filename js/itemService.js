// 1. HTML-DOM Crates an item that contains the task
function createItem(item) {
    if (!(item instanceof Item)) {
        return;
    }


    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = item.name;
    input.classList.add("item_input");

    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "EDIT";
    edit.addEventListener("click", () => this.edit(input, item));

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "REMOVE";
    remove.addEventListener("click", () => this.remove(itemBox, item));

    // creates new item box for tasks and ads the Div to the HTMl
    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(edit);
    itemBox.appendChild(remove);

}

function edit(input, item) {
    if (input.disabled) {
        input.disabled = !input.disabled;
    } else {
        input.disabled = !input.disabled;
        let indexOf = todos.indexOf(item);
        item.name = input.value;
        todos[indexOf] = item;
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

// removes the tasks that are done
function remove(itemBox, item) {
    itemBox.parentNode.removeChild(itemBox);
    let index = todos.indexOf(item);
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos)); // Deletes the JSON Data in your localStorage
}
