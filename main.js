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

    countCheckedItems();
};

// Adds an event listener to the entire todo-content container that listens for clicks
// If the click occurs on a button it will delete the closest list item element
todoContent.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const todo = event.target.parentNode;
        todo.remove();
    }
})

todoContent.addEventListener('click', (event) => {
    if (event.target.nodeName === 'INPUT') {
        const todo = event.target.parentNode;
        
        let itemsLeft = document.querySelector('#incomplete-count');
        itemsLeft.textContent = 'Something happened!!!'
        let checkedCount = countCheckedItems();
    }

})

toggleAllCheckbox.addEventListener('change', (event) => {
    let currentList = document.querySelectorAll('.todo');
    for (listItem of currentList) {
        let currentItem = listItem.querySelector('input')
        if (toggleAllCheckbox.checked) {
            currentItem.checked = true;
        }
        else {
            currentItem.checked = false;
        }
    }
    let checkedCount = countCheckedItems();
})

function countCheckedItems() {
    let currentList = document.querySelectorAll('.todo');
    let counter = 0;
    for (listItem of currentList) {
        let itemCheckbox = listItem.querySelector('input');
        if (itemCheckbox.checked) {
            counter++;
        }
    }

    toggleFeatureBar();
    return counter;
}

function toggleFeatureBar() {
    let currentList = document.querySelectorAll('.todo');
    let featureBar = document.querySelector('.feature-bar')
    if (currentList.length > 0) {
         featureBar.removeAttribute('hidden');
    }
    else {
        featureBar.setAttribute('hidden',true);
    }
}
