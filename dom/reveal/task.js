let rectsOnDocument = Array.from(document.querySelectorAll('.reveal'))

rectsOnDocument.forEach((rect) => {
    setInterval(()=>{
        const {top, bottom} = rect.getBoundingClientRect();
        if(bottom < 0 || top > window.innerHeight){
            rect.classList.remove('reveal_active');
        } else {
            rect.classList.add('reveal_active');
        };
    },1000)    
});