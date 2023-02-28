let form = document.querySelector('#input');
let todoListTemplate = document.querySelector('#todo-template');
let todoContent = document.querySelector('#todo-content');

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