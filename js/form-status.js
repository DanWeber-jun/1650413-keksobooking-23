const addForm = document.querySelector('.ad-form');
const addFilters = document.querySelector('.map__filters');

const setDisabledState = () => {
  addForm.forEach((item) => {
    item.disabled = !item.disabled;
  });
  addFilters.forEach((item) => {
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

