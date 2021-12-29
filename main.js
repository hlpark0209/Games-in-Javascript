'use strict';

const btn = document.querySelector('.wirte__btn');
const input = document.querySelector('.wirte__input');
const list = document.querySelector('.list__el');
const listStyle = document.querySelector('.list__el_item');
const deleteIcon = document.querySelector('.list__el__delete');


        // append the li element and delete icon 
function addTask(){
    if( input.value == ''){
        alert('Please enter your daily task !');
    }else{
        const contents = document.createElement('li');
        const del = document.createElement('div');
        const delIcon = document.createElement('i');

        contents.innerHTML = input.value;
        list.appendChild(contents);
        contents.classList.add('list__el_item');

        del.classList.add('list__el__delete');
        del.appendChild(delIcon);
        delIcon.classList.add('far');
        delIcon.classList.add('fa-trash-alt');
        list.appendChild(del);

        input.value = '';

        // checked function
        contents.addEventListener('click', () => {
            contents.classList.toggle('checked');
        });

         // Delete the element
        delIcon.addEventListener('click', () =>{
            alert(' Do you want to delete things to do? ');
            delIcon.parentNode.previousSibling.remove();
            delIcon.remove();
        }); 
    }
    

}
btn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addTask();
    }
    });



