import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

// portal plase
const modalRoot = document.querySelector('#modalRoot');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('Escape');
      }
    });
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  //синтаксис подключения портала: return createPortal(что, куда)
  render() {
    return createPortal(
      <div className={style.Modal__backdrop}>
        <div className={style.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
