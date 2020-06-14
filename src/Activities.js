import React from 'react';
import './Activities.css';
import ListItem from './ListItem';



const Activities=(props)=>{


    return(
       <ul>
            {
            props.todo.map(item => (
                <ListItem key={item.id} text={item.text}  del={props.del}/>
            ))
        }
       </ul>
    )



}


export default Activities;



