import React from 'react';
import './Activities.css';
import ListItem from './ListItem';



const Activities=(props)=>{


    return(
       <ul>
            {
            props.todo.map(item => (
                <ListItem key={item.id} text={item.text} />
            ))
        }
       </ul>
    )



}


export default Activities;



