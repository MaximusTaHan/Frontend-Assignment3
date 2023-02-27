let form = document.querySelector('#input');
let todoListTemplate = document.querySelector('#todo-template');
let todoContent = document.querySelector('#todo-content');

todoContent.appendChild(todoListTemplate.cloneNode(true).content);

form.onsubmit = event => {
    event.preventDefault();
    
    let textInput = form.elements.inputField.value;
    let list = todoContent.querySelector('ul');
    todoContent.cloneNode(true); // ???
    let newItem = list.querySelector('li');
    let newLabel = newItem.querySelector('label');
    newLabel.textContent = textInput;
    list.appendChild(newItem);
};

 