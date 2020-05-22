import React, {Component} from 'react';
import InputField from './InputField';
import Activities from './Activities';
import './App.css';

class App extends Component{


  constructor(){
    super();
    this.state={
      task:''
    }
  }


  render(){
    return(
      <div>

        <h1>To do list</h1>
        <InputField/>
        <Activities/>

      </div>
    )
  }
}

export default App;
