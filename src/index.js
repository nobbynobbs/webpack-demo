import * as _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    _.filter([0, 1,2,3], (x) => x > 1 ).join(', ')
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());