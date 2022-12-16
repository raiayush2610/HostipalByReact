import React from "react";

function Item(props){
    const hangle =()=>{
        console.log("click");
    }
    return(
        <option  value={props.name}>{props.name}</option>
    )
    
}

export default Item;
