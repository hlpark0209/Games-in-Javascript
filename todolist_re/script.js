'use strict';

const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const list = document.querySelector('.list');

//2. li 요소가 append
// ⭐ id 값을 0부터 시작으로 설정 ⭐
let id = 0;

function appendList(){
    const value = input.value;
    const listLi = document.createElement('li');
    if( value === "") {
        alert(" Write you task !");
    } else{
    listLi.innerHTML = `
        <div class="text">
            <div class="todo">${value}</div>
            <button class="delete">
                <i class="fas fa-trash" data-id=${id}></i>
            </button>
        </div>
        <div class="line"></div>
        `;
    id++;
    list.appendChild(listLi);
    input.value = "";
    }
    return listLi;
}


//1. 추가 or enter 버튼 눌렀을때 
addBtn.addEventListener('click', appendList);
document.addEventListener('keydown', () => {
    if(window.event.keyCode === 13){
        appendList();
    }
});


//3. 삭제기능
list.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if( id ){
        // const del = document.querySelector(`.fas[data-id="${id}"]`);
        const delLi = document.querySelector('.text');
        const delLine = document.querySelector('.line');
        delLi.remove();
        delLine.remove();
    }
});

list.scrollIntoView(); 