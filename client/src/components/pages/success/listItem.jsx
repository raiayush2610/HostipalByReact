import React from "react";

function Item(props){
    const hangle =()=>{
        console.log("click");
    }
    return(
        <option  value={props.name}onClick={hangle}>{props.name}</option>
    )
    console.log(props.name);
}

export default Item;