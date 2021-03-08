import React from 'react';
import './TodoList.css';
import classNames from 'classnames'; // пакет для составления динамических классов в компоненте
import Todo from '../Todo';

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
            <Todo
              completed={completed}
              text={text}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDeliteTodo={() => onDeliteTodo(id)}
            />
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
