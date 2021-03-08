import React, { PureComponent } from 'react';
import classNames from 'classnames'; // пакет для составления динамических классов в компоненте
import './ColorPicker.css';

// const ColorPicker = ({ options }) => {
//   return (
//     <div className="ColorPicker">
//       <h2 className="ColorPicker__title">Color Picker</h2>
//       <div>
//         {options.map(({ label, color }) => (
//           <span
//             key={color}
//             className="ColorPicker__option"
//             style={{ backgroundColor: color }}
//           >
//             {label}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

class ColorPicker extends PureComponent {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionClassName = index => {
    // const optionClasses = ['ColorPicker__option'];

    // if (index === this.state.activeOptionsIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }
    // return optionClasses.join(' ');
    // --- with library classnames it's simler ---
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionsIdx,
    });
    // first arg ('ColorPicker__option') -> base, obj arg ('ColorPicker__option--active') -> calculated by condition
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;
    // ниже - вычисляемое на базе пропов и стейта свойство с деструктуризацией
    const { color } = options[activeOptionsIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title" style={{ color: color }}>
          Color Picker
        </h2>
        <div className="ColorPicker__bar">
          {options.map(({ label, color }, index) => (
            // const optionClasses = ['ColorPicker__option'];

            // if (index === this.state.activeOptionsIdx) {
            //   optionClasses.push('ColorPicker__option--active')
            // }

            <button
              key={color}
              // className={optionClasses.join(' ')}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
