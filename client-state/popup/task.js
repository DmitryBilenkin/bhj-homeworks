const popup = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close_times');

function setCookie(name, value){
    document.cookie = name + '=' + encodeURIComponent(value);
};

function getCookie(name){
    let cookieName = document.cookie.split('; ');
    return cookieName.find(e => e.startsWith(name));
};

if(!getCookie('closePopup')){ 
    popup.classList.add('modal_active');
};

closeBtn.addEventListener('click', ()=>{
    popup.classList.remove('modal_active')
    setCookie('closePopup','true');
    console.log(document.cookie)
});



