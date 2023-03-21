let textarea = document.getElementById('editor');

let textInLocalStorage = localStorage.getItem('text');

if(textInLocalStorage){
    textarea.value = textInLocalStorage;
};

textarea.addEventListener('input', ()=>{
        localStorage.setItem('text', textarea.value.trim());
});

