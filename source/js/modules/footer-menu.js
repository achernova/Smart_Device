const buttonNav = document.getElementById('toggle__nav-footer');
const footerNav = document.getElementById('nav-footer');
const buttonCont = document.getElementById('toggle__contact-footer');
const contactNav = document.getElementById('contact-footer');

const getOpenMenu = () => {
  buttonNav.addEventListener('click', function () {
    footerNav.style.display = 'block';
    let styleNav = footerNav.style.display = 'block';

    if (styleNav) {
      buttonNav.addEventListener('click', function () {
        footerNav.style.display = 'none';
      });

      buttonCont.addEventListener('click', function () {
        contactNav.style.display = 'block';
        footerNav.style.display = 'none';
      });
    }
  });

  buttonCont.addEventListener('click', function () {
    contactNav.style.display = 'block';
    let styleContact = contactNav.style.display = 'block';

    if (styleContact) {
      buttonCont.addEventListener('click', function () {
        contactNav.style.display = 'none';
      });

      buttonNav.addEventListener('click', function () {
        footerNav.style.display = 'block';
        contactNav.style.display = 'none';
      });
    }
  });
};


export {getOpenMenu};
