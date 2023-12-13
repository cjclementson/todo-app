var idCounter = 0;

function addButtonClicked() {
    let text = document.querySelector("#todo-input").value;
    let ul = document.querySelector("ul");

    li = createListItem(text);
    ul.appendChild(li);

    document.querySelector("#todo-input").value = "";

    updateIdCounter();
}

function removeButtonClicked(element) {

    element.parentElement.removeChild(element);
}

function onChangeCheckbox(element) {
    
    let input = element.querySelector('input');
    let label = element.querySelector('label');

    if (input.checked) {

        label.classList.add('todo-item-label-completed');
    }
    else {
        label.classList.remove('todo-item-label-completed');
    }
}

/*
<li id=<li-id>>
    <input id="<checkbox-id>" type="checkbox" class="todo-item-checkbox" onclick="onChangeCheckbox(<liid>)">
    <label for="<checkbox-id>> {text} </label>
    <a class="remove-item-button" onclick="removeButtonClicked(<li-id>)">
        <i class='bx bx-x-circle'></i>
    </a>
</li>
*/
function createListItem(text) {
    
    let li = document.createElement("li");
    
    let liId = "li" + idCounter;
    li.setAttribute("id", liId);

    let checkboxId = "checkbox" + idCounter;
    li.appendChild(createCheckbox(checkboxId, li));
    li.appendChild(createLabel(checkboxId, text));
    li.appendChild(createRemoveButton(li));

    return li;
}

/*
<input id="<checkbox-id>" type="checkbox" class="todo-item-checkbox" onclick="onChangeCheckbox(<liid>)">
*/
function createCheckbox(id, li) {
    let input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "todo-item-checkbox");
    input.setAttribute("onclick", "onChangeCheckbox(" + li.id + ")");

    return input;
}
/*
<label for="<checkbox-id>> {text} </label>
*/
function createLabel(checkboxId, text) {
    let label = document.createElement("label");
    label.setAttribute("for", checkboxId);
    label.innerHTML = text;

    return label;
}

/*
<a class="remove-item-button" onclick="removeButtonClicked(<li-id>)">
    <i class='bx bx-x-circle'></i>
</a>
*/
function createRemoveButton(li) {
    let anchor = document.createElement("a");
    anchor.setAttribute("class", "remove-item-button");
    anchor.setAttribute("onclick", "removeButtonClicked(" + li.id + ")");

    let icon = document.createElement("i");
    icon.setAttribute("class", "bx bx-x-circle");

    anchor.appendChild(icon);
    return anchor;
}

function updateIdCounter() {

    idCounter++;
}