import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      { id: 1, item: "wake up" },
      { id: 2, item: "Complete this course" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => console.log("handle change");
  handleSubmit = e => console.log("handle submit");
  handleDelete = id => console.log(`handle delete ${id}`);
  handleEdit = id => console.log(`handle delete ${id}`);
  clearList = () => console.log("clearList");

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
