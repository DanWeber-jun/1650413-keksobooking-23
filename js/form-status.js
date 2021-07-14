const addForm = document.querySelector('.ad-form');
const fieldsets = document.querySelectorAll('fieldset, .map__filters > select');
const addFilters = document.querySelector('.map__filters');


const setDisabledState = () => {
  fieldsets.forEach((item) => {
    item.disabled = !item.disabled;
  });
};


const toInactiveState = () => {
  setDisabledState();
  addForm.classList.add('ad-form--disabled');
  addFilters.classList.add('ad-form--disabled');
};

const toActiveState = () => {
  setDisabledState();
  addForm.classList.remove('ad-form--disabled');
  addFilters.classList.remove('ad-form--disabled');
};


export {toInactiveState, toActiveState};

