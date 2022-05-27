const buttonNav = document.getElementById('toggle__nav-footer');
const footerNav = document.getElementById('nav-footer');
const buttonCont = document.getElementById('toggle__contact-footer');
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
      buttonNav.textContent = '_';
      buttonNav.style.top = '-20px';
      buttonCont.textContent = '+';
    } else {
      footerNav.classList.add('is-closed');
      footerNav.classList.remove('is-opened');
      buttonNav.textContent = '+';
      buttonNav.style.top = '-7px';
    }
  }, {passive: true});

  buttonCont.addEventListener('click', function () {
    if (contactNav.classList.contains('is-closed')) {
      contactNav.classList.add('is-opened');
      contactNav.classList.remove('is-closed');
      footerNav.classList.add('is-closed');
      footerNav.classList.remove('is-opened');
      buttonCont.textContent = '_';
      buttonCont.style.top = '-22px';
      buttonNav.textContent = '+';
    } else {
      contactNav.classList.add('is-closed');
      contactNav.classList.remove('is-opened');
      buttonCont.textContent = '+';
      buttonCont.style.top = '-10px';
    }
  }, {passive: true});
};

export {getOpenMenu};
