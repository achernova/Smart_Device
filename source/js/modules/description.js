const details = document.querySelector('[data-element="details"]');
const buttonDetails = document.querySelector('[data-element="button-details"]');


const getDetails = () => {
  buttonDetails.addEventListener('click', function () {
    if (details.classList.contains('is-invalid')) {
      details.classList.remove('is-invalid');
    } else {
      details.classList.add('is-invalid');
    }
    buttonDetails.textContent = buttonDetails.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
  }, {passive: true});
};

export {getDetails};
