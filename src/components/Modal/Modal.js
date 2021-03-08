import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

// portal plase
const modalRoot = document.querySelector('#modalRoot');

export default class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      // console.log('Escape');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  //синтаксис подключения портала: return createPortal(что, куда)
  render() {
    return createPortal(
      <div className={style.Modal__backdrop} onClick={this.handleBackdropClick}>
        <div className={style.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
