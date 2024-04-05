// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// headerTitle.innerText = "Hi there!" // or textContent but textContent does not respect the display style
// console.log(headerTitle)
// //headerTitle.innerHTML = '<h3>Hi</h3>'
// header.style.borderBottom = 'solid 3px #000'


//getElementsByClassName

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].style.fontWeight = 'bold'

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }


//querySelector only grabs the first one. it can be used on both id and class

// var header = document.querySelector('#main-header')
// header.style.borderBottom = '3px solid #000'
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue'

// var nitem = document.querySelector('.list-group-item:nth-child(2)')
// nitem.style.color = 'coral'


// //querySelectorAll
// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// var even = document.querySelectorAll('.list-group-item:nth-child(even)');

// for(var i=0; i< odd.length; i++){
//     odd[i].style.backgroundColor = "#ccc"
//     even[i].style.backgroundColor = "#f4f4f4"
// }


// Traversing the DOM
// var itemList = document.querySelector('#items')
// itemList.parentNode.style.backgroundColor = '#d4d4d4' //similar to parentElement
// //onsole.log(itemList.children)
// itemList.lastElementChild.innerHTML = 'DELL Palmtop'
// itemList.firstElementChild.innerHTML = 'HP Laptop'
// itemList.previousElementSibling.style.color = 'green'

// const main = document.querySelector('div #main');
// var div = document.createElement('div');
// div.id = 'btn'
// div.style.display = 'flex'

// div.style.justifyContent = 'space-between'
// div.style.alignItems = 'center'
// var span = document.createElement('span')
// span.innerText = 'click delete'
// span.style.fontWeight = 'bold'

// var button = document.createElement('button')
// button.setAttribute('type', 'submit');
// button.style.color = 'white'
// button.style.backgroundColor = 'red'
// button.style.marginTop = '10px'
// button.innerText = 'Delete';

// div.appendChild(button); //Append the button to div
// div.insertBefore(span, button)
// main.appendChild(div); // Append the div to the main element


// EventListener

const form = document.querySelector('#form')
const itemInput = document.querySelector('#itemInput');
const submitButton = document.querySelector('#submitButton');
const itemList = document.querySelector('#items');
const deleteButton = document.querySelector('#button');

submitButton.addEventListener('click', addItemsToList );
deleteButton.addEventListener('click', deleteSelectedItems);

function addItemsToList() {
    const newItemText = itemInput.value;
    console.log('New Item:', newItemText);
    
    if (newItemText) {
    const newItem = document.createElement('li');
    newItem.classList.add('list-group-item')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('itemCheckbox')

    const span = document.createElement('span');
    span.textContent = ` ${newItemText}`;

    newItem.appendChild(checkbox);
    newItem.appendChild(span);

    itemList.appendChild(newItem);
    }
    itemInput.value = '' //cleat input field
}

function deleteSelectedItems() {
    const checkboxes = document.querySelectorAll('.itemCheckbox');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const listItem = checkbox.parentNode;
            listItem.parentNode.removeChild(listItem);
        }
    });
}