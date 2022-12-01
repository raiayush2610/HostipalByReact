import React from "react";
import Home from "./pages/home/home";
import Register from "./pages/Register/register";
import Login from "./pages/login/login";
import Failure from "./pages/failure/failure";
import Success from "./pages/success/success";
import Admin from "./pages/admin/admin";
import Patient from "./pages/Patient/Patient";
import ReacherDept from "./pages/department/depart";
import Doctor from "./pages/doctor/doctor";
import Footer from "./Footer/footer";
import NoPage from "./pages/NoPage/nopage";
import Listdoc from "./pages/listdoc/Listdoc";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Listpat from "./pages/listPati/Listpat";

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
                    <Route path= "/reacherDept" element ={<ReacherDept/>}/>
                    <Route path= "/doc" element ={<Doctor/>}/>
                    <Route path = "/Lispatient" element={<Listpat/>}/>
                    <Route path = "/LisDoc" element={<Listdoc/>}/>
                    <Route path= '*' element ={<NoPage/>}/>
                    
                    
                </Routes>
                <Footer/> 
      
            </Router>
        </>        
    )
}

export default App;
// App