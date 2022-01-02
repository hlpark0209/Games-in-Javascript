// 버블링을 이용하여 item에만 클릭이벤트를 적용
// delete icon에는 uuid를 지정하여 해당하는 id를할당하여, 해당 id를 기억한 후 실행
const item = document.querySelector('.items');
const inputItem = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');



function onAdd () {
    // 1. 사용자가 입력한 text 받아옴
    const text = inputItem.value;
    if ( text === '') {
        inputItem.focus();
        return;
    }
    // 2. 받아온 text로 새로운 아이템을 만듦 ( text + delete )
    const items = createItem(text);

    // 3. items안에 새로운 아이템을 추가
    item.appendChild(items);

    // 4. 새로 추가된 아이템으로 스크롤링
    items.scrollIntoView( {block:'center'});

    // 5. input이 초기화됨
    inputItem.value = '';
    inputItem.focus();
};

let id = 0; //uuid


addBtn.addEventListener('click', onAdd);
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <div class="item__name">${text}</div>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </div>
        <div class="item__line"></div>
    `;
    id++;

    // const itemEach = document.createElement('div');
    // itemEach.setAttribute('class', 'item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'item__delete');
    // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // deleteBtn.addEventListener('click', () => {
    //     item.removeChild(itemRow);
    // });
    
    // const line = document.createElement('div');
    // line.setAttribute('class', 'item__line');


    // itemEach.appendChild(name);
    // itemEach.appendChild(deleteBtn);

    // itemRow.appendChild(itemEach);
    //itemRow.appendChild(line);
    return itemRow;

}

inputItem.addEventListener ('keypress', (e) =>{
    if ( e.key === 'Enter'){
        onAdd();
    }
});

item.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if(id){
        const deleteBtn = document.querySelector(`.item__row[data-id="${id}"]`);
        deleteBtn.remove();
    }
});