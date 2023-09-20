'use strict';

const $ = document;
console.log('%c Enter a Esc to close Modal' , 'color : violet');
const modal = $.querySelector('.modal');
const overlay = $.querySelector('.overlay');
const btnCloseModal = $.querySelector('.close-modal');
const btnsOpenModal = $.querySelectorAll('.show-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

$.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
