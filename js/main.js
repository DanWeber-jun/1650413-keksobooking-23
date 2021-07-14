import {offers} from './data.js';
import {toActiveState} from './form-status.js';
import {createMapPin} from './map.js';
import './form.js';

toActiveState();

createMapPin(offers);

