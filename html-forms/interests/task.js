const interestChecks = Array.from(document.querySelectorAll('.interest__check'));

interestChecks.forEach((intCheck) => {
    intCheck.addEventListener('change', () => {
        let parentIntCheck = intCheck.closest('.interests_active');       
        
        if(parentIntCheck === null || intCheck.closest('.interest').querySelector('ul')) {
            let mainIntDiv = intCheck.closest('.interest');
            let checkboxesInParent = Array.from(mainIntDiv.querySelector('.interests_active').querySelectorAll('.interest__check'));

            if(intCheck.checked){            
                checkboxesInParent.forEach((chbxPrnt) => {
                        chbxPrnt.checked = true;                  
                });
            } else {
                checkboxesInParent.forEach((chbxPrnt) => {
                    chbxPrnt.checked = false;  
                 
                });
            };
            
        } else {
            let intCheckInParentDiv = Array.from(parentIntCheck.querySelectorAll('.interest__check'));
            let allElementsChecked = intCheckInParentDiv.every((el) => el.checked);
            let someElementsCheked = intCheckInParentDiv.some((el) => el.checked);
            let closestLiIterest = parentIntCheck.closest('.interest');

            if(allElementsChecked){      
                closestLiIterest.querySelector('.interest__check').indeterminate = false;         
               closestLiIterest.querySelector('.interest__check').checked = true;
            } else if(someElementsCheked){
                closestLiIterest.querySelector('.interest__check').checked = false;
                closestLiIterest.querySelector('.interest__check').indeterminate = true;
            }else{
                closestLiIterest.querySelector('.interest__check').indeterminate = false;

            }

        };
    });
        
       
});

