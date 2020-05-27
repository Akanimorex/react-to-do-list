import React, { Component } from "react";
import InputField from "./InputField";
import Activities from "./Activities";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     todo:[],
     text:""
    };

  }


onChangeAdd = (event) =>{
  this.setState({
    text:event.target.value
  })
}

  onSubmitAdd = (event) => {
    console.log('click')
    
      // this.setState({text:event.target.value});

      const newItem = {
        id:0,
        text:this.state.text,
        done:false
      }; 
      
      this.setState((prevState)=>( [{
        todo:prevState.todo.concat(newItem),
       
      }]))
       
    
  };



  render() { 
  
   return(

      <div>
        <h1>To do list</h1>
        <InputField change={ this.onChangeAdd } /> <button onClick={ this.onSubmitAdd }>Add</button>
        <Activities  todo={this.state.todo} />
        
    </div>

   )
    

   
  }
};


export default App;
