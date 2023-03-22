const item = document.getElementById('items');
const img = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.onloadend = () => {
    if(xhr.status === 200){
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
    } else {
        console.log(`Произошла ошибка (Код ошибки: ${xhr.status}, Текст ошибки: ${xhr.statusText}`)
    };
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();