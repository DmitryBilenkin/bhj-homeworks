let item = document.getElementById('items');
let img = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE){
        img.classList.remove('loader_active');

        let valutes = xhr.response['response']['Valute'];

        for(let valute in valutes){            
            let currentValuteObj = valutes[valute];
            let itemCode = currentValuteObj['CharCode'];
            let itemValue = currentValuteObj['Value'];

            item.insertAdjacentHTML('beforeend',`   
                <div class="item">
                    <div class="item__code">
                        ${itemCode}
                    </div>
                    <div class="item__value">
                        ${itemValue}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`);                  
        };
    };
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();