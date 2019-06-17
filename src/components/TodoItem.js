import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
        <h6>{title}</h6>
        <div className="todo-ico">
          <span className="mx-2 txt-success" onClick={handleEdit}>
            <i className="fas fa-pen" />e
          </span>
          <span className="mx-2 txt-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />d
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
