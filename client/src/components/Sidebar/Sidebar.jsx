import React from 'react'
import { useState } from 'react';
import hamburger from "../../images/hamsign.png"
import "./sidebar.css"
function Sidebar() {
          const [isActive,SetActive] = useState("false")


const handlechange =() =>{
          SetActive(!isActive)
}        
  return (
    <>
    <div className={isActive ? "sidebarGo": "main-sidebar"}>    
    {/* <div className="main-sidebar">     */}

            <div>
                <a href="http://"></a>
            </div>
            <ul>
                <li><a href="/admin">About</a></li> 
                <li><a href="/Doc">Add Doctor</a></li> 
                <li> <a href="/LisDoc">List Doctor</a></li> 
                <li><a href="/Deldoc">Delete Doctor</a></li> 
                <li> <a href="/ModDoc">Modifly Doctor</a></li> 
                <li> <a href="/reacherDept">Add Clinic</a></li> 
                <li> <a href="/Lisclinic">List Clinic</a></li> 
                <li> <a href="/Delclinic">Delete Clinic</a></li> 
                <li> <a href="/Modclinic">Modifly Clinic</a></li> 
                
                <li> <a href="/Lispatient">Patient List</a></li> 
                <li> <a href="/Delpatient">Delete Patient</a></li>
                <li> <a href="/Modpatient">Modifly Patient</a></li>
            </ul>

        </div>
        <section id="content-header">
                
                    <div class="hamburger" >
                        
                       <img class="ham" src={hamburger} onClick={handlechange}  width="30px" alt=""/>
                    
                </div>
        </section>
        <div className="admin">
    
          </div>
    </>
  )
}

export default Sidebar
