'use babel';

import React from 'react';
import CustomTextInput from "./input/input"
import Button from "./button/button"

export default class App extends React.Component {
    constructor() {
        this.state = {}
    }

    render() {
        return (
            <div className="App">
              <div className="heading">
                <CustomTextInput placeholder="Character Name" />
              </div>
              <div className="sidebar">
                <Button name="Stats" func={()=>{console.log("ok 1")}}/>
                <Button name="Skills" func={()=>{console.log("ok 2")}}/>
                <Button name="Inventory" func={()=>{console.log("ok 3")}}/>
                <Button name="Notes" func={()=>{console.log("ok 4")}}/>
              </div>
              <div className="stats">
                <CustomTextInput placeholder="STR" />
                <CustomTextInput placeholder="DEX" />
                <CustomTextInput placeholder="CON" />
                <CustomTextInput placeholder="INT" />
                <CustomTextInput placeholder="WIS" />
                <CustomTextInput placeholder="CHA" />
              </div>
            </div>
        );
    }
}
//              <div className="description">
//              </div>
