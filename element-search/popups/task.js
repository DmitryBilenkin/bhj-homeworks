const modalMain = document.getElementById('modal_main');
const modalMainClose = document.querySelector('#modal_main .modal__close_times');
const modalSuccessClose = document.querySelector('#modal_success .modal__close_times');
const showSuccess = modalMain.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');


modalMain.className = 'modal modal_active';

modalMainClose.onclick = () => {
    modalMain.className = 'modal';
};

modalSuccessClose.onclick = () => {

    modalSuccess.className = 'modal'
};

showSuccess.onclick = () => {
  modalSuccess.className = 'modal modal_active';
  modalMain.className = 'modal';
};
