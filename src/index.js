import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import XmlData from './data.xml';
import JsonData from './data.json';

function component() {
  let element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(XmlData);
  console.log(JsonData);

  return element;
}

document.body.appendChild(component());