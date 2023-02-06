const tabArr = Array.from(document.querySelectorAll('.tab'));

tabArr.forEach((tab) => {    
    tab.addEventListener('click', () => {
        if(tab.className === 'tab'){
            let parentTab = tab.closest('.tabs');
            let tabsOfParent = Array.from(parentTab.querySelectorAll('.tab'));
            let contentOfParent = Array.from(parentTab.querySelectorAll('.tab__content'));

            tabsOfParent.forEach((tab) => {
                tab.className ='tab'
            });

            tab.className = 'tab tab_active';

            tabsOfParent.findIndex((actTab, ind) => {
                if (actTab.className === 'tab tab_active'){
                    let indForContent = ind;
                    contentOfParent.forEach((cont) => {
                        cont.className ='tab__content';
                    });
                    
                    contentOfParent[indForContent].className = 'tab__content tab__content_active';
                };                
            });           
            
        } else {
            tab.className = 'tab'
        };       
    });
});