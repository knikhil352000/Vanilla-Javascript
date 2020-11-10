
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value !== '' && editFlag === false){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>`; 
                
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        list.appendChild(element);
        displayAlert('item added to list', 'success');
        //show container
        container.classList.add('show-container');
        //add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();

    }else if(value !== '' && editFlag === true){


    }else{
        displayAlert('please enter value', 'danger')
    }
}
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000);
}

function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
}

//delete function

function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
}

//edit function

function editItem(){

}

//set back to default

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value){
    console.log('hello');
}

// ****** SETUP ITEMS **********
