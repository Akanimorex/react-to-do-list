import React, { Component } from "react";
import InputField from "./InputField";
import Activities from "./Activities";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task:[],
    };

  }

  onSubmitAdd = (event) => {
    if (event.charCode === 13){
      console.log(event.target.value);
      this.setState({task:event.target.value})  
    } 
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <InputField add={ this.onSubmitAdd } />
        <Activities lists ={this.state.task} />
      </div>
    );
  }
}

export default App;
