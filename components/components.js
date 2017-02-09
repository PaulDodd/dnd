'use babel';

import React from 'react';
import CustomTextInput from "./input/input"

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
              <div className="heading">
              <CustomTextInput />
              </div>
              <div className="sidebar">
              </div>
              <div className="stats">
              </div>
              <div className="description">
              </div>
            </div>
        );
    }
}
