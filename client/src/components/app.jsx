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
import Listdoc from "./pages/listDoc/Listdoc";
import Listcinic from "./pages/listClinic/Listcinic";
import Delpat from "./pages/delPat/Delpat";
import Deldoc from "./pages/delDoc/Deldoc";
import Delclinic from "./pages/delCinic/Delclinic";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Listpat from "./pages/listPati/Listpat";
import Moddoc from "./pages/modDoc/Moddoc";

import Mod from "./pages/modDoc/Modifly"

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
                    <Route path = "/Lisclinic" element={<Listcinic/>}/>
                    <Route path = "/LisDoc" element={<Listdoc/>}/>
                    <Route path = "/Delpatient" element={<Delpat/>}/>
                    <Route path = "/Deldoc" element={<Deldoc/>}/>
                    <Route path = "/Delclinic" element={<Delclinic/>}/>
                    <Route path = "/ModDoc" element={<Moddoc/>}/>
                    
                    <Route path = "/Mo" element={<Mod />}/>

                    <Route path= '*' element ={<NoPage/>}/>
                    
                    
                </Routes>
                <Footer/> 
      
            </Router>
        </>        
    )
}

export default App;
// App