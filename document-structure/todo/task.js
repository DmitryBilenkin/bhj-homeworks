let form = document.getElementById('tasks__form');
let input = document.getElementById('task__input');
let btn = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');


btn.onclick = () => {

    if(input.value.trim()){                       
       tasksList.insertAdjacentHTML('afterbegin',
       `<div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
       </div>`);

    let task = tasksList.querySelector('.task');
    let remBtn = task.querySelector('.task__remove');

    remBtn.addEventListener('click',()=>{
        task.remove();
    });
    
    form.reset();   
    };

return false
};
