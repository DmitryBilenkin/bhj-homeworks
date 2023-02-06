const dropDownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropDownLink = Array.from(document.querySelectorAll('.dropdown__link'));

    dropDownList.forEach((list) => {
        let dropDownButton = list.closest('.dropdown');

        dropDownButton.onclick = () => {
            if(list.className === 'dropdown__list'){
                list.className = 'dropdown__list dropdown__list_active';
            } else {
                list.className = 'dropdown__list';
            };
        };
    });

dropDownLink.forEach((link) => {
    let parentItem = link.closest('.dropdown__item');
    let parentDropDown = link.closest('.dropdown');
    let dropDownValue = parentDropDown.querySelector('.dropdown__value')

    parentItem.onclick = () => {
        dropDownValue.textContent = link.textContent;

        return false;
    }
});