const phoneInput = document.getElementById('phone');
const modalPhoneInput = document.getElementById('modal-phone');

const getMask = () => {
  phoneInput.onkeydown = function (evt) {
    let el = evt.target;
    let key = parseInt(evt.key, 10);
    if (evt.key.length === 1 && isNaN(key)) {
      evt.returnValue = false;
      return false;
    }
    if (evt.key.length === 1 && el.value.length > 13) {
      evt.returnValue = false;
      return false;
    }
    return true;
  };

  phoneInput.onkeyup = function (evt) {
    const el = evt.target;

    if (el.value.length <= 3) {
      el.value = '+7(';
    }
    if (el.value.length >= 6 && evt.key !== 'Backspace' && el.value[6] !== ')') {
      el.value = el.value.slice(0, 6) + ')' + el.value.slice(6, el.value.length - 1);
    }
    return true;
  };

  phoneInput.onfocus = function (evt) {
    const el = evt.target;
    if (el.value === '') {
      el.value = '+7(';
    }
  };

  phoneInput.onblur = function (evt) {
    const el = evt.target;
    if (el.value === '+7(') {
      el.value = '';
    }
  };


  modalPhoneInput.onkeydown = function (evt) {
    let el = evt.target;
    let key = parseInt(evt.key, 10);
    if (evt.key.length === 1 && isNaN(key)) {
      evt.returnValue = false;
      return false;
    }
    if (evt.key.length === 1 && el.value.length > 13) {
      evt.returnValue = false;
      return false;
    }
    return true;
  };

  modalPhoneInput.onkeyup = function (evt) {
    const el = evt.target;
    if (el.value.length <= 3) {
      el.value = '+7(';
    }
    if (el.value.length >= 6 && evt.key !== 'Backspace' && el.value[6] !== ')') {
      el.value = el.value.slice(0, 6) + ')' + el.value.slice(6, el.value.length - 1);
    }
    return true;
  };

  modalPhoneInput.onfocus = function (evt) {
    const el = evt.target;
    if (el.value === '') {
      el.value = '+7(';
    }
  };

  modalPhoneInput.onblur = function (evt) {
    const el = evt.target;
    if (el.value === '+7(') {
      el.value = '';
    }
  };
};

export {getMask};
