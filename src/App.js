import React, { Component, Fragment } from "react";
import AppBar from "./Components/AppBar/AppBar";
import ToDoList from "./Components/ToDoList/ToDoList";
import ToDoInput from "./Components/ToDoInput/ToDoInput";

class App extends Component {
  state = {
    id: 0,
    items: [],
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    console.log(newItem);

    const newItems = [...this.state.items, newItem];

    this.setState({
      items: newItems,
      item: "",
      id: this.state.id + 1,
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };

  handleEdit = (id) => {
    const newItems = this.state.items.filter((item) => item.id !== id);

    const selectedItem = this.state.items.find((item) => item.id === id);

    console.log(selectedItem);

    this.setState({
      items: newItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  emptyList = () => {
    this.setState({ items: [] });
  };

  render() {
    return (
      <Fragment>
        <AppBar />
        <div className="row p-0 m-0">
          <div className="col-lg-8 col-md-8 mx-auto mt-4">
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              emptyList={this.emptyList}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
