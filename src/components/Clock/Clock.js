import React, { Component } from 'react';
import style from './Clock.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }
  // если не снять setInterval будет утечка памяти (для наглядности закомментировать componentWillUnmount)
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={style.Clock__face}>{this.state.time}</div>;
  }
}
