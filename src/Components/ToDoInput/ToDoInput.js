import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class ToDoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3 shadow-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={item}
            onChange={handleChange}
          ></input>
          <div class="input-group-append">
            <button type="submit" className="btn btn-primary">
              {editItem ? (
                <FontAwesomeIcon icon={faCheckCircle} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ToDoInput;
