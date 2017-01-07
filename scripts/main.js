import React from 'react';
import ReactDOM from 'react-dom';
import Game from './component.jsx';

window.onload = function(){
  ReactDOM.render(<Game />, document.getElementById('app'));
}
