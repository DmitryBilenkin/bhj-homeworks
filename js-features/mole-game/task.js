const holes = document.getElementsByClassName('hole');
let holesArray = Array.from(holes);

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;


holesArray.forEach((hole) => hole.onclick = function (){
    if(hole.className.includes('hole_has-mole')){
        deadCount += 1;
        dead.textContent = deadCount;
    } else {
        lostCount += 1;
        lost.textContent = lostCount;
    };

    if(deadCount === 10){
        alert('Вы выйграли!');
        reset();
    };

    if(lostCount === 5){
        alert('Вы прогирали!');
        reset();
    };

});

function reset (){
    dead.textContent = 0;
    lost.textContent = 0;
    deadCount = 0;
    lostCount = 0;
}