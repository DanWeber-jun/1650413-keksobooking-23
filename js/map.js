import {createCard} from './card.js';
import {toInactiveState, toActiveState} from './form-status.js';
import './data.js';

const adForm = document.querySelector('.ad-form');
const address = adForm.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelector('select.map__filter, fieldset') ;

const MAX_OFFERS = 10;
const FIXED_NUMBER = 5;

const LAT_MAP = 35.6895;
const LNG_MAP = 139.692;

const ZOOM_MAP = 10;

const LAT_MAIN_MARKER = 35.6895;
const LNG_MAIN_MARKER = 139.692;

const mainPin = {
  url: './img/main-pin.svg',
  size: [52, 52],
  anchor: [26, 52],
};

const pin = {
  url: './img/pin.svg',
  size: [52, 52],
  anchor: [26, 52],
};

const map = L.map('map-canvas')
  .on('load', () => {
    toActiveState();
  })
  .setView({
    lat: LAT_MAP,
    lng: LNG_MAP,
  }, ZOOM_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.marker({
  iconUrl: mainPin.url,
  iconSize: mainPin.size,
  iconAnchor: mainPin.anchor,
});

const mainMarker = L.marker({
  lat: LAT_MAIN_MARKER,
  lng: LNG_MAIN_MARKER,
},
{
  draggable: true,
  icon: mainPinIcon,
},
).addTo(map);

address.value = `${LAT_MAIN_MARKER}, ${LNG_MAIN_MARKER}`;

mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(FIXED_NUMBER)}, ${lng.toFixed(FIXED_NUMBER)}`;
});

const pinIcon = L.icon({
  iconUrl: pin.url,
  iconSize: pin.size,
  iconAnchor: pin.anchor,
});

const layerGroup = L.layerGroup().addTo(map);

const removeMapPin = () => {
  layerGroup.clearLayers();
};

const createMapPin = (offers) => {
  offers.forEach((offer) => {
    const {location} = offer;
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(layerGroup)
      .bindPopup(() => createCard(offer),
        {
          keepInView: true,
        },
      );
  });
};

export {createMapPin};
