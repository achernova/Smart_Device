const toggleNav = document.getElementById('toggle__nav-footer');
const buttonNav = document.getElementById('button__nav-footer');
const footerNav = document.getElementById('nav-footer');
const toggleCont = document.getElementById('toggle__contact-footer');
const buttonCont = document.getElementById('button__contact-footer');
const contactNav = document.getElementById('contact-footer');

const getOpenMenu = () => {

  footerNav.classList.remove('is-active');
  contactNav.classList.remove('is-active');

  buttonNav.addEventListener('click', function () {
    if (footerNav.classList.contains('is-closed')) {
      footerNav.classList.add('is-opened');
      footerNav.classList.remove('is-closed');
      contactNav.classList.add('is-closed');
      contactNav.classList.remove('is-opened');
      toggleNav.textContent = '_';
      toggleNav.style.top = '-20px';
      toggleCont.textContent = '+';
    } else {
      footerNav.classList.add('is-closed');
      footerNav.classList.remove('is-opened');
      toggleNav.textContent = '+';
      toggleNav.style.top = '-7px';
    }
  }, {passive: true});

  buttonCont.addEventListener('click', function () {
    if (contactNav.classList.contains('is-closed')) {
      contactNav.classList.add('is-opened');
      contactNav.classList.remove('is-closed');
      footerNav.classList.add('is-closed');
      footerNav.classList.remove('is-opened');
      toggleCont.textContent = '_';
      toggleCont.style.top = '-22px';
      toggleNav.textContent = '+';
    } else {
      contactNav.classList.add('is-closed');
      contactNav.classList.remove('is-opened');
      toggleCont.textContent = '+';
      toggleCont.style.top = '-10px';
    }
  }, {passive: true});
};

export {getOpenMenu};
