const adForm = document.querySelector('.ad-form');
const capacity = adForm.querySelector('#capacity');
const guestNumbers = capacity.querySelectorAll('option');
const roomNumber = adForm.querySelector('#room_number');
const timeForm = adForm.querySelector('.ad-form__element--time');
const timein = adForm.querySelector('#timein');
const timeout = adForm.querySelector('#timeout');
const priceInput = adForm.querySelector('#price');
const typeOfHouse = adForm.querySelector('#type');


const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 100000,
};

const onTypeOfHouseChange = () => {
  const minPrice = MIN_PRICE[typeOfHouse.value];
  priceInput.placeholder = minPrice;
  priceInput.min = minPrice;
};

typeOfHouse.addEventListener('change', () => {
  const valueType = typeOfHouse.value;
  priceInput.min = MIN_PRICE[valueType];
  priceInput.placeholder = MIN_PRICE[valueType];
});


timeForm.addEventListener('change', (evt) => {
  timein.value = evt.target.value;
  timeout.value = evt.target.value;
});


const NumberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumbers.forEach((guest) => {
    // indexOf вернёт найденный элемент roomValue среди NumberOfGuests или вернёт -1
    const isDisabled = (NumberOfGuests[roomValue].indexOf(guest.value) === -1);
    guest.selected = NumberOfGuests[roomValue][0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });

};

validateRooms();

const onRoomNumberChange = () => {
  validateRooms();
};

roomNumber.addEventListener('change', onRoomNumberChange);

onTypeOfHouseChange();

export {validateRooms};
