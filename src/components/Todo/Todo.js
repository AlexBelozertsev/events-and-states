import React from 'react';
import '../TodoList/TodoList.css';
import IconButton from '../iconButton';

import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ completed, text, onToggleCompleted, onDeliteTodo }) => {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      {text}
      <IconButton onClick={onDeliteTodo} aria-label="Delete this todo">
        <DeleteIcon fill="white" width="20" height="20" />
      </IconButton>

      {/* <button
              type="button"
              className="TodoList__button"
              onClick={onDeliteTodo}
            >
              X
            </button> */}
    </>
  );
};

export default Todo;
