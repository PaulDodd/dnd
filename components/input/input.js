import React from 'react';
import styles from './input.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.focus = this.focus.bind(this);
    this.default = props.default
    this.textInput = undefined
    this.focus = this.focus.bind(this);
    this._handleFoucus = this._handleFoucus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleChange = this._handleChange.bind(this);
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
      console.log(this.state.value)
      if(this.textInput === null){
        return
      }
    //   console.log(this.textInput)
    //   this.textInput.focus();
  }
  _handleBlur() {
      console.log("Setting value")
      console.log(this.textInput.value)
      this.setState({"value":this.textInput.value})
  }
  _theRef(input){
      this.textInput = input;
  }
  _handleChange(event){
    console.log(event.target.value)
    this.setState({"value":event.target.value})
  }
  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    let cn = cx({base: true, dark:true});
    return (
      <div className={styles.container}>
        <input
          className={styles.base}
          type="text"
          className={ cn }
        //   value={this.state.value}
          placeholder={ this.props.placeholder }
          ref={(input) => { this.textInput = input; }}
          onFocus={ this._handleFoucus }
          onBlur={ this._handleBlur }
        //   onChange={ this._handleChange }
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
