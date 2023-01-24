const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItemArr = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

let indOfActiveSlider = null;

sliderItemArr.findIndex((elem, index) => {
    if(elem.className === 'slider__item slider__item_active'){
        indOfActiveSlider = index;
    };
});
sliderDots[indOfActiveSlider].className = 'slider__dot slider__dot_active';
// Таким образом установим индекс активного слайдера и точки, а также их изначальное отображение в зависимости от того, какой мы установим начальный активный слайд в HTML

function showActiveSlide (ind){
    sliderItemArr[indOfActiveSlider].className = 'slider__item';
    sliderDots[indOfActiveSlider].className = 'slider__dot';

    if(ind < indOfActiveSlider){
        if(ind < 0){
            ind = sliderItemArr.length - 1;
        };
    
        sliderItemArr[ind].className = 'slider__item slider__item_active';
        sliderDots[ind].className = 'slider__dot slider__dot_active';

        return indOfActiveSlider = ind;

    } else if(ind > indOfActiveSlider){
        if(ind === (sliderItemArr.length)){
                ind = 0;
            };

        sliderItemArr[ind].className = 'slider__item slider__item_active';
        sliderDots[ind].className = 'slider__dot slider__dot_active';

        return indOfActiveSlider = ind;
    };
};

//Переключение стрелками
arrowPrev.onclick = () => {
    showActiveSlide (indOfActiveSlider - 1);
};

arrowNext.onclick = () => {
    showActiveSlide (indOfActiveSlider + 1);
};

//Переключение точками
sliderDots.forEach((dot) => {    
    dot.onclick = () => {
        let indOfDot = sliderDots.indexOf(dot);
        showActiveSlide (indOfDot);
    };
});

