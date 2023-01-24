const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.querySelectorAll('.modal__close_times'));
const showSuccess = modalMain.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.className = 'modal modal_active';

modalClose.forEach((close) => {
  close.onclick = () => {
    let parentClose = close.closest('.modal');
    parentClose.className = 'modal';
  };
});

showSuccess.onclick = () => {
  modalSuccess.className = 'modal modal_active';
  modalMain.className = 'modal';
};
