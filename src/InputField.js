import React from 'react';
import './InputField.css'

const InputField = (props) => {
    return(
        <div className="textField">
            <form onSubmit={props.submit}>

                <input ref={props.theRef} type="text"  placeholder="activities"/>
                <button type="submit" >Add</button>

            </form>

                

                
        </div>
    )
}

export default InputField;