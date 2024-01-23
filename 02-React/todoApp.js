import React from "react";
import { render } from "react-dom";

const Todo = (props) => (
  <li>
    <input
      type="checkbox"
      onChange={props.todo.onToggle}
      checked={props.todo.checked}
    />
    <button onClick={props.onDelete}>delete</button>
    <span>props.todo.text</span>
  </li>
);

let id = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo() {
    const text = prompt("TODO text please!");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.if !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  }

  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked Todo count:{" "}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo}>Add TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              todo={todo}
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
