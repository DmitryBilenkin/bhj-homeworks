let rectsOnDocument = Array.from(document.querySelectorAll('.reveal'))

rectsOnDocument.forEach((rect) => {
    setInterval(()=>{
        const {innerHeight} = window;
        const {top} = rect.getBoundingClientRect();        
        if (top < innerHeight && top > 0) {        
          rect.classList.add("reveal_active");        
        } else {        
          rect.classList.remove("reveal_active");        
        }        
    }, 1000)
});
