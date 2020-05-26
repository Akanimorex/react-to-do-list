import React, { Component } from "react";
import InputField from "./InputField";
import Activities from "./Activities";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo:[],
      adding:""
    };

  }


componentDidMount(){
  const lists =[];
   


}

onSubmitAdd = (event) => {
  if (event.charCode === 13){
    console.log(event.target.value);
    this.setState({todo:event.target.value})
  } 
};





  render() {
    // const lists = [
    //   {
    //     id: 0,
    //     todo: 'see a movie'
    //   }, 
    //   {
    //     id: 1,
    //     todo: 'go to church'
    //   }, 
    // ];
    let output = this.state.todo.map(item => {
      return (<Activities key={item.id} list={item.todo} />)
    })
    console.log(output)
    return (
      <div>
        <h1>To do list</h1>
        <InputField add={ this.onSubmitAdd } />
        {output}
      </div>
    );
  }
};


export default App;
