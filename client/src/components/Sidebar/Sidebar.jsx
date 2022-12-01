import React from 'react'
import { useEffect } from 'react'
import cross from "../../images/cross.png";
import hamburger from "../../images/hamsign.png"
function Sidebar() {

useEffect(()=>{
          document.querySelector('.cross').style.display = 'none';
          document.querySelector('.hamburger').addEventListener("click", ()=>{

          document.querySelector('.main-sidebar').classList.toggle('sidebarGo');

          if( document.querySelector('.main-sidebar').classList.contains('sidebarGo')){
          document.querySelector('.ham').style.display = 'inline';
          document.querySelector('.cross').style.display = 'none';
          }


}); 

},[])          
  return (
    <>
    <div class="main-sidebar">
            <div>
                <a href="http://"></a>
            </div>
            <ul>
                <li><a href="/admin">About</a></li> 
                <li><a href="/Doc">Add Doctor</a></li> 
                <li><a href="/Deldoc">Delete Doctor</a></li> 
                <li> <a href="/LisDoc">List Doctor</a></li> 
                <li> <a href="/departmentForm">Add Clinic</a></li> 
                <li> <a href="/Lisclinic">List Clinic</a></li> 
                <li> <a href="/Delclinic">Delete Clinic</a></li> 
                <li> <a href="/Lispatient">Patient List</a></li> 
                <li> <a href="/Delpatient">Delete Patient</a></li>
            </ul>

        </div>
        <section id="content-header">
                
                    <div class="hamburger" >
                        <img class="cross"  src={cross} width="30px" alt=""/>
                    //     <img class="ham" src={hamburger}   width="30px" alt=""/>
                    
                </div>
        </section>
    
    
    
    </>
  )
}

export default Sidebar
