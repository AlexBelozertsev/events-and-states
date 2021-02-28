import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {
  return (
    <Container>
      <Counter initialValue={10} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </Container>
  );
}

export default App;
