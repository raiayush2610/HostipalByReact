import React from "react";
import Home from "./pages/home/home";
import Register from "./pages/Register/register";
import Login from "./pages/login/login";
import Failure from "./pages/failure/failure";
import Success from "./pages/success/success";
import Admin from "./pages/admin/admin";
import Patient from "./pages/Patient/Patient";
import Depart from "./pages/department/depart";
import Doctor from "./pages/doctor/doctor";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/Sidebar";
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
                    <Route path= "/Patient" element = {<Patient />}/>
                    <Route path= "/reacherDept" element ={<Depart/>}/>
                    <Route path= "/doc" element ={<Doctor/>}/>
                    <Route path= "/side" element ={<Sidebar/>}/>

                </Routes>
                <Footer/> 
      
            </Router>
        </>        
    )
}

export default App;
// App