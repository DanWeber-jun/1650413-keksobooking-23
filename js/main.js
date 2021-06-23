import {createCard} from './create-number.js';
import {offers} from './data.js';


const map = document.querySelector('.map');


map.appendChild(createCard(offers[0]));
