const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

plus.forEach((p)=>{
    p.addEventListener('click', () => {
        let quantControl = p.closest('.product__quantity-controls');
        let prodQuantValue = quantControl.querySelector('.product__quantity-value');
        +prodQuantValue.innerHTML ++;
    });
});

minus.forEach((m)=>{
    m.addEventListener('click', () => {
        let quantControl = m.closest('.product__quantity-controls');
        let prodQuantValue = quantControl.querySelector('.product__quantity-value');
        if(prodQuantValue.innerHTML <= 1){
            return
        } else {       
        +prodQuantValue.innerHTML --;
        };
    });
});

productAdd.forEach((addInCart)=>{    
    addInCart.addEventListener('click', ()=>{
        let addInCartProduct = addInCart.closest('.product');
        let quat = addInCartProduct.querySelector('.product__quantity-value').innerHTML;
        let imgProduct = addInCartProduct.querySelector('.product__image').getAttribute('src');
        let dataId = addInCartProduct.getAttribute('data-id');

        let cartProds = Array.from(cart.querySelectorAll('.cart__product'));

        let cartCheck = cartProds.findIndex((cp) => cp.getAttribute('data-id') === dataId);
        if(cartCheck !== -1){
            let cardCount = cartProds[cartCheck].querySelector('.cart__product-count');
            cardCount.innerHTML = +cardCount.innerHTML + +quat;
        } else {        
            cart.insertAdjacentHTML('beforeend', 
            `<div class="cart__product" data-id="${dataId}">
                <img class="cart__product-image" src="${imgProduct}">
                <div class="cart__product-count">${quat}</div>
            </div>`);
        };
    });
});


        
               
        