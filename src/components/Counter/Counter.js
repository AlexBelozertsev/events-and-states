import React from 'react';
import style from './Counter.module.css';
import Controls from './Controls';

class Counter extends React.Component {
  // объявление дефолтных значений в случае отсутствия входящих пропсов
  static defaultProps = {
    initialValue: 0,
  };
  // constructor() {
  //     super();
  //     this.state = {
  //         value: 5,
  //     }
  // }
  // аналогично
  state = {
    value: this.props.initialValue,
  };

  HandleImcrement = event => {
    console.log('event', event);
    console.log('event.target', event.target);
    console.log('event.type', event.type);

    const { target } = event;
    setTimeout(() => {
      console.log('for async use local variable', target);
    }, 1000);

    // простая замена значения ( объект )
    this.setState({
      value: 1,
    });
  };
  HandleDecrement = () => {
    // console.log(this);
    // изменение состояния отталкиваясь от предыдущего значения ( функция )
    this.setState(prevState => {
      console.log(prevState);
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div className={style.Counter}>
        <span className={style.value}>{this.state.value}</span>

        <Controls
          onIncrement={this.HandleImcrement}
          onDecrement={this.HandleDecrement}
        />
        {/* <div className={style.controls}>
                    <button type="button" onClick={this.HandleImcrement}>+1</button>
                    <button type="button" onClick={this.HandleDecrement}>-1</button>
                </div> */}
      </div>
    );
  }
}

export default Counter;
