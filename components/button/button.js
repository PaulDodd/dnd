
import React from 'react';
import styles from './button.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.function = props.func;
    this.state = {};
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(){
    this.function();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    let cn = cx({base: true, dark:true});
    return (
      <div className={styles.container}>
        <input
          className={styles.base}
          type="button"
          className={ cn }
        //   value={this.state.value}
          placeholder={ this.props.placeholder }
          onClick={ this._handleClick }

        //   onChange={ this._handleChange }
        />
      </div>
    );
  }

}

export default Button;
