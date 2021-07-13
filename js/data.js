import {shuffleArray, getRandomNumber, getSomeFloat, getSomeInt} from './util.js';

const COUNT = 10;
const Lat = {
  MIN: 35.65000,
  MAX: 35.70000,
  DIGIT: 5,
};
const Lng = {
  MIN:139.70000,
  MAX: 139.80000,
  DIGIT: 5,
};
const Rooms = {
  MIN: 1,
  MAX: 5,
};
const Guests = {
  MIN: 1,
  MAX: 8,
};
const Price = {
  MIN: 1000,
  MAX: 20000,
};

const offers = [];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const addOffer = (index) =>  ({
  author: {
    avatar:`img/avatars/user${index < COUNT ? '0' : `${  index}`}.png`,
  },
  offer: {
    title: `Моя уютная обитель${COUNT[index]}`,
    address: location.lat + location.lng,
    price: getRandomNumber(Price.MIN, Price.MAX),
    type: TYPES[getSomeInt(0, TYPES.length - 1)],
    rooms: getRandomNumber(Rooms.MIN, Rooms.MAX),
    guests: getRandomNumber(Guests.MIN, Guests.MAX),
    checkin: TIMES[getSomeInt(0, TIMES.length - 1)],
    checkout: TIMES[getSomeInt(0, TIMES.length - 1)],
    features: shuffleArray(FEATURES).slice(getSomeInt(0, FEATURES.length - 1)),
    description: 'Комфорт, уют, чистота и порядок - здесь именно то место, которое вы искали для отдыха, чтобы чувствовать себя как дома вдали от него!',
    photos: shuffleArray(PHOTOS).slice(getSomeInt(0, PHOTOS.length - 1)),
  },
  location: {
    lat: getSomeFloat(Lat.MIN, Lat.MAX, Lat.DIGIT),
    lng: getSomeFloat(Lng.MIN, Lng.MAX, Lng.DIGIT),
  },
});

const getOffers = () => {
  for(let i = 0; i < COUNT; i++) {
    offers.push(addOffer(i));
  }
};

getOffers();
addOffer();

export {offers, getOffers};

