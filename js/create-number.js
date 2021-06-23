
const template = document.querySelector('#card').content.querySelector('.popup');
const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createCard = ({offer}) => {
  const cloneTemplate = template.cloneNode(true);
  cloneTemplate.querySelector('.popup__title').textContent = offer.title;
  cloneTemplate.querySelector('.popup__text--address').textContent = offer.address;
  cloneTemplate.querySelector('.popup__text--price').textContent = ` ${offer.price} ₽/ночь`;
  cloneTemplate.querySelector('.popup__type').textContent = types[offer.type];
  cloneTemplate.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  cloneTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  const container = cloneTemplate.querySelector('.popup__features');
  const createFeatures = (features, container) => {
    const list = container.querySelector('li');
    if (list) {
      list.forEach((item) => {
        if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
          item.remove();
        }
      });
    }
  };
  createFeatures(features, container);

  cloneTemplate.querySelector('.popup__description').textContent = offer.description;
  return cloneTemplate;
};


export {createCard};

