import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeliteTodo }) => {
  const completedTodos = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  );
  return (
    <>
      <ul className="TodoList">
        {todos.map(({ id, text }) => (
          <li key={id} className="TodoList__item">
            {text}
            <bottom
              type="bottom"
              className="TodoList__bottom"
              onClick={() => onDeliteTodo(id)}
            >
              X
            </bottom>
          </li>
        ))}
      </ul>
      <div>
        <p>Общее количество: {todos.length}</p>
        <p>Количество выполненных: {completedTodos}</p>
      </div>
    </>
  );
};

export default TodoList;
