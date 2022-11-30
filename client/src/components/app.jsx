import React from "react";
import Home from "./pages/home/home";
import Register from "./pages/Register/register";
import Login from "./pages/login/login";
import Failure from "./pages/failure/failure";
import Success from "./pages/success/success";
import Admin from "./pages/admin/admin";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path = "/" element = {<Home />}/>
                    <Route path = "/register" element = {<Register />} />
                    <Route path = "/login" element = {<Login />} />
                    <Route path = "/fail" element = {<Failure />} />
                    <Route path= "/success" element = {<Success />} />
                    <Route path= "/admin" element = {<Admin />} />
                    <Route path= "/Pat" element ={<patient/>}/>
                </Routes>
            </Router>
        </>        
    )
}

export default App;