import React, { Component } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class ToDoList extends Component {
  render() {
    const { items, emptyList, handleDelete, handleEdit } = this.props;

    return (
      <div className="container-fluid p-0 m-0">
        <span className="h1">My tasks</span>

        <button
          type="button"
          className="btn btn-danger btn-block mt-3 mb-3"
          onClick={emptyList}
        >
          Clear all tasks <FontAwesomeIcon icon={faTrash} className="mx-1" />
        </button>

        <ul className="list-group mt-3 mb-3 shadow-sm">
          {items.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              ></ToDoItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
