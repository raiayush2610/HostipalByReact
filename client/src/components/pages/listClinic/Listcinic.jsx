import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'

function Listcinic() {
  const [Cinics,setCilinic]= useState([]);
  const getCilic = async ()=>{
    try {
      const res =await axios.get('http://localhost:4000/reacherDept/api/reacherDepts').then((res)=>setCilinic(res.data))
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
                      {(cil.deparmentName == null) ?  <td>null</td> : <td>{cil.deparmentName}</td>}
                      {(cil.deparmentHead == null) ?  <td>null</td> : <td>{cil.deparmentHead}</td>}
                      {(cil.deparmentArea == null) ?  <td>null</td> : <td>{cil.deparmentArea}</td>}
                      {(cil.deparmentEmployment== null) ?  <td>null</td> : <td>{cil.deparmentEmployment}</td>}
                      {(cil.deparmentphoneno== null) ?  <td>null</td> : <td>{cil.deparmentphoneno}</td>}
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
