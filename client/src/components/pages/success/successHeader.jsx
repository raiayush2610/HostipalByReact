import React from "react";

function SuccessHeader(props){
    // console.log(props)
    return(
        <div>
            <nav className="navbar heading">
        <div className="container-fluid">
           <span className="navbar-brand mb-0 h1">Hospital Info Services</span>
           <p>Welcome {props.name}</p>
        </div>
        </nav>
        </div>
    )
}
export default SuccessHeader;