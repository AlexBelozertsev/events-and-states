import React from 'react';
import './TodoList.css';
import classNames from 'classnames'; // пакет для составления динамических классов в компоненте

const TodoList = ({ todos, onDeliteTodo, onToggleCompleted }) => {
  const completedTodos = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  );
  return (
    <>
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            className={classNames('item', { item__completed: completed })}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            {text}
            <button
              type="button"
              className="TodoList__button"
              onClick={() => onDeliteTodo(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="TodoList__explain">
        <p>All: {todos.length}</p>
        <p>Done: {completedTodos}</p>
      </div>
    </>
  );
};

export default TodoList;
