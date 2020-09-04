import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

class ToDoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item">
        <span className="d-inline-block lead text-break m-1">{title}</span>

        <div className="btn-group float-right m-1">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </li>
    );
  }
}

export default ToDoItem;
