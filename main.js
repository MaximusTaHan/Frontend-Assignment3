let form = document.querySelector('#input');
let todoListTemplate = document.querySelector('#todo-template');
let todoContent = document.querySelector('#todo-content');
let toggleAllCheckbox = document.querySelector('#toggle-all');

todoContent.appendChild(todoListTemplate.cloneNode(true).content);
let list = todoContent.querySelector('ul');

let todoItemTemplate = document.querySelector('#item-template');

form.onsubmit = event => {
    event.preventDefault();

    let textInput = form.elements.inputField.value;

    let newItem = todoItemTemplate.cloneNode(true).content;

    let newLabel = newItem.querySelector('label');
    newLabel.textContent = textInput;
    list.appendChild(newItem);

    form.elements.inputField.value = '';
};

todoContent.addEventListener('click', (event) => {
    const todo = event.target.parentNode;
    todo.remove();
})

toggleAllCheckbox.addEventListener('change', (event) => {
    let currentList = document.querySelectorAll('.todo')
    for (listItem of currentList) {
        let currentItem = listItem.querySelector('input')
        if (toggleAllCheckbox.checked) {
            currentItem.checked = true;
        }
        else {
            currentItem.checked = false;

        }
    }
})