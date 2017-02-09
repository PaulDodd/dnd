import React from 'react';
import styles from './input.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.default = props.default
    this.textInput = undefined
    this.focus = this.focus.bind(this);
    this._handleFoucus = this._handleFoucus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  dummy(){
      return "dummy"
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    // this.textInput.focus();
  }
  _handleFoucus() {
      console.log("focusing")
      console.log(this.dummy())
      if(this.textInput === null){
        return
      }
      console.log(this.textInput)
    //   this.textInput.focus();
  }
  _handleBlur() {
      console.log("blurring")
    //   console.log(this.textInput)
  }
  _theRef(input){
      this.textInput = input;
  }
  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    let cn = cx({base: true, dark:true});
    return (
      <div className={styles.container}>
        <input
          type="text"
          className={ cn }
          name="firstname"
          title="First Name"
          placeholder="The placeholder"
          ref={(input) => { this.textInput = input; }}
          onFocus={ this._handleFoucus }
          onBlur={ this._handleBlur }
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={ this._handleFoucus }
        />
      </div>
    );
  }
};

export default CustomTextInput;
