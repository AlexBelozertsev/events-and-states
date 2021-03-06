import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import Form from './components/Form/Form';
import TodoEditor from './components/TodoEditor';
import TodoFilter from './components/TodoFilter';

import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {...todo, completed: !todo.completed}
    //     }
    //     return todo
    //   })
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  filterChange = evt => {
    // console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
  };

  formSubmitHandler = data => console.log(data);

  TodoEditorSubmitHandler = text => {
    // console.log(text);
    const todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  getFilteredTodo = () => {
    const { todos, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalazedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredTodo = this.getFilteredTodo();

    return (
      <Container>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <Form onSubmit={this.formSubmitHandler} />
        <TodoFilter value={filter} onChange={this.filterChange} />
        <TodoEditor onSubmit={this.TodoEditorSubmitHandler} />
        <TodoList
          todos={filteredTodo}
          onDeliteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
