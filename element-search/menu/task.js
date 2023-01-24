const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach((link) => {
    let parentLink = link.closest('.menu__item');
    let ul = parentLink.querySelector('.menu_sub');

    if(ul){
        link.onclick = () => {
            let parentLinkMenuMain = link.closest('.menu_main');
            let menuSubInMenuMain = Array.from(parentLinkMenuMain.querySelectorAll('.menu_sub'));
                    
            if(ul.className === 'menu menu_sub'){
                menuSubInMenuMain.forEach((elem) => {             
                    elem.className = 'menu menu_sub';           
                });                
                ul.className = 'menu menu_sub menu_active';
            } else if( ul.className === 'menu menu_sub menu_active'){
                ul.className = 'menu menu_sub';
            };
                return false;
            };       
    }    
});

