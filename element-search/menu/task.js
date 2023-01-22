const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach((link) => {
    let parentLink = link.closest('.menu__item');
    let ul = parentLink.querySelector('.menu_sub');
  
    if(ul){
        link.onclick = () => {
            let parentLinkMenuMain = link.closest('.menu_main');
            let ulMain = Array.from(parentLinkMenuMain.querySelectorAll('.menu_sub'));
            ulMain.forEach((ul) => {
                ul.className = 'menu menu_sub';
            });
            ul.className = 'menu menu_sub menu_active';           
        return false;
        };            
    }    
});

