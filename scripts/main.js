import hook from 'css-modules-electron/register';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/components.js';

window.onload = function(){
  ReactDOM.render(<App />, document.getElementById('app'));
}
