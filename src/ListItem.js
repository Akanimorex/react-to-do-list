import React from "react";
import { Icon } from "semantic-ui-react";

const ListItem = (props) => {

  const iconStyle ={
    fontSize:'30px',
    padding:'10px'
  }
  return (
    <div className="list">
      <div>
        <h3>{props.text}</h3>
      </div>
      <div>
        <Icon style={iconStyle} name="pencil" />
        <Icon style={iconStyle} onClick={()=>{props.del(props.id)}} name="trash"/>

      </div>
    </div>
  );
};

export default ListItem;
