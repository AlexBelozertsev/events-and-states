import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ value, onChange }) => {
  return (
    <label className="TodoFilter">
      Search by...
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default TodoFilter;
