const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((elem)=>{
    let tooltipDiv = document.createElement('div');
    elem.insertAdjacentElement('afterend', tooltipDiv);
    tooltipDiv.classList.add('tooltip');    

    elem.onclick = () => {
       let tooltipActive = document.querySelector('.tooltip_active');        
        if(tooltipActive){
            tooltipActive.classList.remove('tooltip_active');
        };

        let tooltip = elem.nextElementSibling;
        let title = elem.getAttribute('title');

        tooltip.textContent = title;
        tooltip.classList.add('tooltip_active');        

        return false
    };
});