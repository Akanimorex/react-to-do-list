import React, { Component } from "react";
import InputField from "./InputField";
import Activities from "./Activities";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = React.createRef();

    this.state = {
      todo: [],
    };
  }

  handleDelete =()=>{

    console.log('delete')

  }
  onSubmitAdd = (event) => {
    if(this.itemsRef.current.value !== ""){

      let newItem = this.state.todo;

      newItem.push({
        id: Date.now(),
        text: this.itemsRef.current.value,
      });
  
      this.setState({
        todo: newItem,
      });
      this.itemsRef.current.value = "";

    }

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <InputField theRef={this.itemsRef} submit={this.onSubmitAdd} />
        <Activities todo={this.state.todo} del={this.handleDelete} />
      </div>
    );
  }
}

export default App;
