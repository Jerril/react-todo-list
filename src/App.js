import React, { Component } from "react";
// import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// vs-code setup
class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
