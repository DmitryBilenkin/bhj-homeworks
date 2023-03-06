let rectsOnDocument = Array.from(document.querySelectorAll('.reveal'))

rectsOnDocument.forEach((rect) => {
    document.addEventListener('scroll', () => {
      const {innerHeight} = window;
        const {top, bottom} = rect.getBoundingClientRect();        
        if (top < innerHeight && bottom > 0) {        
          rect.classList.add("reveal_active");        
        } else {        
          rect.classList.remove("reveal_active");        
        }
    })
});
