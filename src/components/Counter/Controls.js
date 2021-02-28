import React from 'react';
import style from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={style.controls}>
    <button type="button" onClick={onIncrement}>
      +1
    </button>
    <button type="button" onClick={onDecrement}>
      -1
    </button>
  </div>
);

export default Controls;
