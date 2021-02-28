import React, { Component } from 'react';
import style from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };
  // show = () => {
  //     this.setState({ visible: true })
  // };
  // hide = () => {
  //     this.setState({ visible: false })
  // };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={style.Dropdown}>
        {/* <button className={style.toggle} onClick={this.show}>Show</button>
                <button className={style.toggle} onClick={this.hide}>Hide</button> */}
        <button type="button" className={style.toggle} onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && <div className={style.menu}>Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
