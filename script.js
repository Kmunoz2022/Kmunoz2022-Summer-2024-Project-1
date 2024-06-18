const itemList = document.getElementById('List');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);

let items = [];

function addItem() {
    const randomNumber = Math.floor(Math.random() * 100); 
    items.push(randomNumber);
    updateList();
}

function removeItem() {
    items.pop();
    updateList();
}

function updateList() {
    itemList.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let listItem = document.createElement('li');
        
        listItem.textContent = (i + 1) + '. ' + items[i];
        
        itemList.appendChild(listItem);
    }
}


