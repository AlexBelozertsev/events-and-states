import React, { Component } from 'react';
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

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionsIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
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
