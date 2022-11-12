import React from "react";

function Item(props){
    return(
        <li><p class="dropdown-item">{props.name}</p></li>
    )
}

export default Item;