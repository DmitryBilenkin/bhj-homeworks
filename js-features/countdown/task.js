const timer = document.getElementById('timer');
const timer1 = document.getElementById('timer1');//таймер для повышенной сложности #1
const hidden_timer1 = document.getElementById('hidden_timer1'); // Нашли скрытый таймер для вычислений
const hidden_link = document.getElementById('hidden_link')

let int = setInterval(() => {
    timer.textContent -=1;
    
    if (timer.textContent === '55'){
        clearInterval(int);
        alert('Вы победили в конкурсе!');
    };
}, 1000);


//Повышенный уровень #1, #2

function showCorrectTime(){
    let hours = Math.floor(+hidden_timer1.textContent / 3600);
    let minutes = Math.floor(((+hidden_timer1.textContent - hours * 3600) / 60));
    let seconds = Math.floor(((+hidden_timer1.textContent - hours * 3600 - minutes * 60)));

    let newTimer = new Date();
    newTimer.setHours(hours,minutes,seconds);

    return timer1.textContent = newTimer.toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'}); // Отображение таймера по формату на странице
}

showCorrectTime()

let int1 = setInterval(() => {
    hidden_timer1.textContent -=1; // Работаем со скрытым таймером
    
    if (hidden_timer1.textContent === '0'){
        clearInterval(int1);
        hidden_link.click();
        // window.open('https://www.google.ru', '_blank'); либо такой вариант перенаправления

    };

    showCorrectTime(); // Отображаем таймер в правильном формате на странице
}, 1000);

// Если работать только с одним таймером, сделанным по формату, 
//невозможно проводить с ним дальнейшие операции, так как формат времени 
//перезаписывает значение timer.textContent в строковом временном формате..
