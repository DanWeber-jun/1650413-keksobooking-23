import {createCard} from './create-number.js';
import {offers} from './data.js';
import './form.js';
import './form-status.js';

const map = document.querySelector('.map');


map.appendChild(createCard(offers[0]));

console.log(offers);