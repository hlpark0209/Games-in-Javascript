'use strict';

const btn = document.querySelector('.wirte__btn');
const input = document.querySelector('.wirte__input');

const list = document.querySelector('.list__el');
const checkboxStyle = document.querySelector('.checkboxStyle');

const checkbox = document.createElement('input');
const contents = document.createElement('li');
const contents_input = document.createElement('button');

console.log(checkboxStyle);



// btn 클릭  + enter key -> list__el에 li 요소가 append 
//btn 정의, li element 생성, input 정의


function addTask(){
    if( input.value == ''){
        alert('Please enter your daily task !');
    }else{
        contents.innerHTML = input.value;
        list.appendChild(contents);
        list.appendChild(checkbox);
        checkbox.classList.add('checkboxStyle');
        input.value = '';
    }
    

}
btn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addTask();
    }
    });