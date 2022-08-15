const ham_btn = document.querySelector('.hamburger-menu');
const mobile_nav = document.querySelector('.mobile-header-slide');
const close_btn = document.querySelector('.close-header');

ham_btn.addEventListener('click', () => {
mobile_nav.classList.toggle('open');
});

close_btn.addEventListener('click', () => {
mobile_nav.classList.remove('open');
});