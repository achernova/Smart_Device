const buttonNav = document.getElementById('toggle__nav-footer');
const footerNav = document.getElementById('nav-footer');
const buttonCont = document.getElementById('toggle__contact-footer');
const contactNav = document.getElementById('contact-footer');

const getOpenMenu = () => {
  if (window.matchMedia('(max-width: 769px)').matches) {
    footerNav.style.display = 'none';
    contactNav.style.display = 'none';
  }

  buttonNav.addEventListener('click', function () {
    if (footerNav.style.display === 'none') {
      footerNav.style.display = 'flex';
      contactNav.style.display = 'none';
      buttonNav.textContent = '_';
      buttonNav.style.top = '-20px';
      buttonCont.textContent = '+';
    } else {
      footerNav.style.display = 'none';
      buttonNav.textContent = '+';
      buttonNav.style.top = '-7px';
    }
  }, {passive: true});

  buttonCont.addEventListener('click', function () {
    if (contactNav.style.display === 'none') {
      contactNav.style.display = 'flex';
      footerNav.style.display = 'none';
      buttonCont.textContent = '_';
      buttonCont.style.top = '-22px';
      buttonNav.textContent = '+';

    } else {
      contactNav.style.display = 'none';
      buttonCont.textContent = '+';
      buttonCont.style.top = '-10px';
    }
  }, {passive: true});
};

export {getOpenMenu};
