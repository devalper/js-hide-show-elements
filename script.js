'use strict';
const modalButton = document.querySelectorAll('button.show-modal');
const hidden = document.querySelectorAll('div.hidden');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
//Our function for opening the modal
const openModal = () => {
    hidden.forEach(div => {
        div.classList.remove('hidden');
    });
}
//Our function for closing the modal
const closeModal = () => {
    hidden.forEach(div => {
        div.classList.add('hidden');
    });
}
//Opening the modal by clicking the "show modal" buttons
modalButton.forEach(button => {
    button.addEventListener('click', openModal);
});
//Closing the modal by clicking the close button(X)
closeButton.addEventListener('click', closeModal);
//Closing the modal by clicking anywhere outside the model
overlay.addEventListener('click', closeModal);
//Closing the modal by pressing the "Esc" key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    };
});
