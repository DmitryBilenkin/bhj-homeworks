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


//Переключение стрелками
arrowPrev.onclick = () => {   
    sliderItemArr[indOfActiveSlider].className = 'slider__item';
    sliderDots[indOfActiveSlider].className = 'slider__dot';

    indOfActiveSlider--;

    if(indOfActiveSlider < 0){
        indOfActiveSlider = sliderItemArr.length - 1;
    };

    sliderItemArr[indOfActiveSlider].className = 'slider__item slider__item_active';
    sliderDots[indOfActiveSlider].className = 'slider__dot slider__dot_active';
};

arrowNext.onclick = () => {
    sliderItemArr[indOfActiveSlider].className = 'slider__item';
    sliderDots[indOfActiveSlider].className = 'slider__dot';

    indOfActiveSlider++;

    if(indOfActiveSlider === (sliderItemArr.length)){
        indOfActiveSlider = 0;
    };

    sliderItemArr[indOfActiveSlider].className = 'slider__item slider__item_active';
    sliderDots[indOfActiveSlider].className = 'slider__dot slider__dot_active';
};

//Переключение точками

sliderDots.forEach((dot) => {    
    dot.onclick = () => {
        sliderItemArr[indOfActiveSlider].className = 'slider__item';
        sliderDots[indOfActiveSlider].className = 'slider__dot';    

        indOfActiveSlider = sliderDots.indexOf(dot);

        sliderItemArr[indOfActiveSlider].className = 'slider__item slider__item_active';
        sliderDots[indOfActiveSlider].className = 'slider__dot slider__dot_active';
    };
});

