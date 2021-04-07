'use strict';
const modalButton = document.querySelectorAll('button.show-modal');
const hidden = document.querySelectorAll('div.hidden');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

modalButton.forEach(button => {
    button.addEventListener('click', function() {
        hidden.forEach(div => {
            div.classList.remove('hidden');
        });
    });
});
//Our function for closing the modal
const closeModal = () => {
    hidden.forEach(div => {
        div.classList.add('hidden');
    });
}
//Closing the modal by clicking the close button
closeButton.addEventListener('click', closeModal);
//Closing the modal by clicking anywhere outside the model
overlay.addEventListener('click', closeModal);
