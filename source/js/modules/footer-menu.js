const buttonNav = document.getElementById('toggle__nav-footer');
const footerNav = document.getElementById('nav-footer');
const buttonCont = document.getElementById('toggle__contact-footer');
const contactNav = document.getElementById('contact-footer');

const getOpenMenu = () => {
  footerNav.style.display = 'none';
  contactNav.style.display = 'none';

  buttonNav.addEventListener('click', function () {

    if (footerNav.style.display === 'none') {
      footerNav.style.display = 'flex';
      contactNav.style.display = 'none';
    } else {
      footerNav.style.display = 'none';
    }

    buttonNav.textContent = buttonNav.textContent === '+' ? '-' : '+';
  });

  buttonCont.addEventListener('click', function () {

    if (contactNav.style.display === 'none') {
      contactNav.style.display = 'flex';
      footerNav.style.display = 'none';

    } else {
      contactNav.style.display = 'none';
    }
    buttonCont.textContent = buttonCont.textContent === '+' ? '-' : '+';
  });
};


export {getOpenMenu};
