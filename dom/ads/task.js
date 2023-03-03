let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let setTime = null;
setInterval(() => {
    rotatorCase.forEach((el)=>{
        let parent = el.closest('.rotator');
        let findedRotatorArray = Array.from(parent.querySelectorAll('.rotator__case'));
        let maxAmountOfElements = findedRotatorArray.length - 1;
        let minAmountOfElements = 0;

        findedRotatorArray.forEach((el)=>{
            el.className = 'rotator__case';
        });

        let i = Math.floor(Math.random() * (maxAmountOfElements - minAmountOfElements));    
        findedRotatorArray[i].className = 'rotator__case rotator__case_active';
    });  
}, 1000);

