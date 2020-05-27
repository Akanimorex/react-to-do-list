import React from 'react';
import './Activities.css'
import { Icon } from 'semantic-ui-react';


const Activities=(props)=>{


    const  lists = props.todo.map((list)=>{
        return (

            
            <div className="list" key={list.id} >
                <div>
                    <h3>{list.text}</h3>
                </div>
                <div>
                    <Icon name="pencil"/>
                </div>        
            </div>

        )
    })
    return(

        <div>{lists}</div>
    )
}


export default Activities;