const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');

const getUserId = localStorage.getItem('id');

if(getUserId){
    id.textContent = localStorage.getItem('id');
    welcome.classList.add('welcome_active');    
};


form.addEventListener('submit', (e)=>{  
    e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange',()=>{ 
            if(xhr.readyState === xhr.DONE){
                let resp = xhr.response;   
                                
                if(resp['success'] === true){
                    let userId = resp['user_id'];
                    localStorage.setItem('id', userId);                  

                    welcome.classList.add('welcome_active');
                    id.textContent = localStorage.getItem('id');
                } else {
                    console.log('Неверный логин/пароль');
                };
            };
        });                

        xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth');

        const formData = new FormData(form);
        xhr.responseType = 'json'
        xhr.send(formData);

    

})



