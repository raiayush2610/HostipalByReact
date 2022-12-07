import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'

function Listcinic() {
  const [Cinics,setCilinic]= useState([]);
  const getCilic = async ()=>{
    try {
      const res =await axios.get('http://localhost:4000/reacherDept/api/reacherDepts').then((res)=>setCilinic(res.data))
      console.log(Cinics);
      
    } catch (error) {
      console.log(error);      
    }
  } 
  useEffect(()=>{
    getCilic()

  },[])
return (
        <>
          <Sidebar/>
    
          <div className='admin'>
                <div className="patlist">
                    <details><summary>Here are the list of cilic</summary>
                   
                    <table id="customers" >
                    <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department Phoneno</th><th>Opening Time</th><th>ClosingTime</th></tr>
                  
                    {Cinics.map((cil=>
                    
                    <tr>
                    
                      {(cil.departmentName == null) ?  <td>null</td> : <td>{cil.departmentName}</td>}
                      {(cil.departmentHead == null) ?  <td>null</td> : <td>{cil.departmentHead}</td>}
                      {(cil.departmentArea == null) ?  <td>null</td> : <td>{cil.departmentArea}</td>}
                      {(cil.departmentEmployment== null) ?  <td>null</td> : <td>{cil.departmentEmployment}</td>}
                      {(cil.departmentphoneno== null) ?  <td>null</td> : <td>{cil.departmentphoneno}</td>}
                      {(cil.DepartmentOpeningtime== null) ?  <td>Unavailable</td> : <td>{cil.DepartmentOpeningtime}</td>}
                      {(cil.DepartmentClosingtime== null) ?  <td>Unavailable </td> : <td>{cil.DepartmentClosingtime}</td>}
                      
                    </tr> 
                      ))}
                    </table>
                    </details>
                 </div>

          </div>


          </>

  )
}

export default Listcinic
