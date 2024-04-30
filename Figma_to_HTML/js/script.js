const toggoleBtn= document.querySelector('.navbar-toggole');
const navbarRight= document.querySelector('.navbar-right');

toggoleBtn.addEventListener('click' , () => {
    toggoleBtn.classList.toggle('active')
    navbarRight.classList.toggle('active')
});
