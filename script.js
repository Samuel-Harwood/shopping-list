const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clear = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e) {
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem === ''){
        alert('Add an item');
        return;
    }
    //create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
    checkUI();
    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove(); 
        //removes the parent of the parent
        
    }
    checkUI();
}

function clearItems(e){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
        console.log('Removed all items');
    }
    checkUI();
}

function checkUI(){
    //console.log(items);
    const items = itemList.querySelectorAll('li');
    console.log(items);
    if(items.length === 0){
        clear.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clear.style.display = 'block';
        itemFilter.style.display = 'block';
        
    }

}

function filterItems(e){
    const text = e.target.value;
    console.log(text);
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clear.addEventListener('click', clearItems);
itemFilter.addEventListener('input',filterItems);

checkUI();
