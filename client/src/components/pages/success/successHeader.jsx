import React from "react";
import { NavLink } from "react-router-dom";
function SuccessHeader(props){
    // console.log(props)
    return(
        <div>
            <nav className="navbar heading">
        <div className="container-fluid">
           <span className="navbar-brand mb-0 h1">Hospital Info Services</span>
           <h5>Welcome {props.name} {props.lName} </h5>
           <p><NavLink to = "/login">Logout</NavLink></p>
        </div>
        </nav>
        </div>
    )
}
export default SuccessHeader;