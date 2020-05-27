import React from 'react';
import './InputField.css'

const InputField = (props) => {
    return(
        <div className="textField">
           

                <input type="text" onChange={props.change} placeholder="activities"/>

                
        </div>
    )
}

export default InputField;