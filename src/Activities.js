import React from 'react';
import './Activities.css';
import ListItem from './ListItem';



const Activities=(props)=>{


    return(
       <ul contentEditable={false}>
            {
            props.todo.map(item => (
                <ListItem contentEditable={false} key={item.id} text={item.text}  del={props.del}/>
            ))
        }
       </ul>
    )



}


export default Activities;



