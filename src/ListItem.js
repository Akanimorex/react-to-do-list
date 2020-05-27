import React from 'react';
import { Icon } from 'semantic-ui-react';



const ListItem = (props) =>{
    return(
        <div className="list" >
                     <div>
                         <h3>{props.text}</h3>
                     </div>
                     <div>
                         <Icon name="pencil"/>
                     </div>        
                </div>
    )
}


export default ListItem;