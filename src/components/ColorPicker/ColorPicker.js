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
  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div className="ColorPicker__bar">
          {this.props.options.map(({ label, color }) => (
            <button
              key={color}
              className="ColorPicker__option"
              style={{ backgroundColor: color }}
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
