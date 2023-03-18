const progress = document.getElementById('progress');
const btn = document.getElementById('send');


btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange',()=>{
    if(xhr.readyState === xhr.OPENED){
        progress.value = 0.25;
    };
    if(xhr.readyState === xhr.HEADERS_RECEIVED){
        progress.value = 0.5; 
    };
    if(xhr.readyState === xhr.LOADING){
        progress.value = 0.75;      
    };
    if(xhr.readyState === xhr.DONE){
        progress.value = 1; 
    };
});
xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send();

    return false;
};




