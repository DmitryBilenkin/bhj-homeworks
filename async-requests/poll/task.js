let polllTitle = document.getElementById('poll__title');
let poolAnswers = document.getElementById('poll__answers');

let xhl = new XMLHttpRequest();

xhl.addEventListener('readystatechange', ()=>{
    if(xhl.readyState === xhl.DONE){
        let poolObj = xhl.response;
        console.log(poolObj)

        let poolTitle = poolObj['data']['title'];
        polllTitle.textContent = poolTitle;

        let poolAnswersArray = poolObj['data']['answers'];
        poolAnswersArray.forEach((ans)=>{
            poolAnswers.insertAdjacentHTML('beforeend', 
            `<button class="poll__answer">
                ${ans}
            </button>`);
        });

        let btnAns = document.querySelectorAll('.poll__answer');
        btnAns.forEach((btn)=>{
            btn.addEventListener('submit', (b)=>{
                b.preventDefault();                
            });

            btn.addEventListener('click', ()=>{
                alert('Спасибо, ваш голос засчитан!');
                               
            });
        });
    };
});

xhl.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhl.responseType = 'json';
xhl.send();
