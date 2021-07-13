
const template = document.querySelector('#card').content.querySelector('.popup');
const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};


const createFeatures = (features, container) => {
  const list = container.querySelectorAll('li');
  if (list) {
    list.forEach((item) => {
      if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        item.remove();
      }
    });
  }
};


const createCard = ({offer}) => {
  const cloneTemplate = template.cloneNode(true);
  const title = cloneTemplate.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }

  const addres = cloneTemplate.querySelector('.popup__text--address');
  if (offer.addres) {
    addres.textContent = offer.address;
  } else {
    addres.remove();
  }

  const price = cloneTemplate.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent = ` ${offer.price} ₽/ночь`;
  } else {
    price.remove();
  }

  const type = cloneTemplate.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = types[offer.type];
  } else {
    type.remove();
  }

  const rooms = cloneTemplate.querySelector('.popup__text--capacity');
  if (offer.rooms) {
    rooms.textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  } else {
    rooms.remove();
  }

  const time = cloneTemplate.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    time.remove();
  }

  const description = cloneTemplate.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }
  createFeatures(offer.features, cloneTemplate.querySelector('.popup__features'));

  const photos = cloneTemplate.querySelector('.popup__photos');
  if (offer.photos) {
    const photoElement = photos.querySelector('img');
    photos.innerHTML = '';
    offer.photos.forEach((url) => {
      photoElement.src = url;
      photos.appendChild(photoElement);
    });
  } else {
    photos.remove();
  }

  return cloneTemplate;
};


export {createCard};

