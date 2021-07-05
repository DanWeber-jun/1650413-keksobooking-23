const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  place: 100000,
};

const priceInput = document.querySelector('#price');
const typeOfHouse = document.querySelector('#type');


typeOfHouse.addEventListener('change', () => {
  const valueType = typeOfHouse.value;
  priceInput.min = MIN_PRICE[valueType];
  priceInput.placeholder = MIN_PRICE[valueType];
});

const adForm = document.querySelector('.ad-form');
const capacity = adForm.querySelectorAll('#capacity');
const guestNumbers = capacity.querySelectorAll('option');
const roomNumber = document.querySelector('#room_number');

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


