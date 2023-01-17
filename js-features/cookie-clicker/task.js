const cookieImg = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let countClick = 0;

const speedClick = document.getElementById('clicker__average-speed');
let clickTime = 0;


cookieImg.addEventListener('mousedown', ()=> {
    cookieImg.width = 230;

    countClick += 1;
    counter.textContent = countClick;

    if (countClick === 1){
        clickTime = new Date();
        return;
    }

    let currentTime = new Date();
    let timeBeforeClick = currentTime - clickTime;
    let averageSpeed = (1000 / timeBeforeClick).toFixed(2);
    speedClick.textContent = averageSpeed;
    clickTime = new Date();
});

cookieImg.addEventListener('mouseup', ()=> cookieImg.width = 200);