import React from 'react';
import './Activities.css'
import { Icon } from 'semantic-ui-react';


const Activities=(props)=>{
    return(


        <div className="list">
            <div>
                <h3>{props.lists}</h3>
            </div>


            <div>
                 <Icon name="pencil"/>
            </div>
           
           
            

        </div>
    )
}


export default Activities;