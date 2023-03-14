let form = document.getElementById('tasks__form');
let input = document.getElementById('task__input');
let btn = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');


btn.onclick = () => {
    if(input.value){                       
       tasksList.insertAdjacentHTML('beforeend',
       `<div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
       </div>`);

    let removeArr = Array.from(document.querySelectorAll('.task__remove'));
    removeArr.forEach((rem)=>{
        rem.addEventListener('click',()=>{
            rem.closest('.task').remove();
        });
    });
    
    form.reset();

}};

form.addEventListener('submit', (f)=>{
    f.preventDefault();
});

form.addEventListener('keydown',(key)=>{
    if(key.code === 'Enter'){
       btn.click;
    };
});

