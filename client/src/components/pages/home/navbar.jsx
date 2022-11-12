import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar heading">
        <div className="container-fluid">
           <span className="navbar-brand mb-0 h1">Hospital Info Services</span>
           <span className="nav-item dropdown">
               <a className="drop-down nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Register/Login</a>
               <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                   <li><NavLink to = "/login" className="dropdown-item">Login</NavLink></li>
                   <li><NavLink to = "/register" className="dropdown-item">Register</NavLink></li>
               </ul>
           </span>
        </div>
       </nav>
    )
}

export default Navbar;