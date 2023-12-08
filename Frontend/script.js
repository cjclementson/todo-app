var counter = 0;

function addButtonClicked() {
    let text = document.querySelector("#input-entry").value;
    let ul = document.querySelector("ul");

    let liId = "li" + counter;

    let li = document.createElement("li");
    li.setAttribute("id", liId);

    let checkboxId = "checkbox" + counter;
    
    li.appendChild(createCheckbox(checkboxId, li));
    li.appendChild(createLabel(checkboxId, text));
    li.appendChild(createRemoveButton(li));
    
    ul.appendChild(li);

    counter = counter + 1;
}

function removeButtonClicked(element) {

    element.parentElement.removeChild(element);
}

function onChangeCheckbox(element) {
    
    let input = element.querySelector('input');
    let label = element.querySelector('label');

    if (input.checked) {

        label.classList.add('completed');
    }
    else {
        label.classList.remove('completed');
    }
}

function createCheckbox(id, li) {
    let input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "todo-entry-checkbox");
    input.setAttribute("onclick", "onChangeCheckbox(" + li.id + ")");

    return input;
}

function createLabel(forId, text) {
    let label = document.createElement("label");
    label.setAttribute("for", forId);
    label.setAttribute("class", "todo-entry-checkbox");
    label.innerHTML = text;

    return label;
}

function createRemoveButton(li) {
    let anchor = document.createElement("a");
    anchor.setAttribute("class", "remove-item-button");

    anchor.setAttribute("onclick", "removeButtonClicked(" + li.id + ")");

    let icon = document.createElement("i");
    icon.setAttribute("class", "bx bx-x-circle");

    anchor.appendChild(icon);

    return anchor;
}