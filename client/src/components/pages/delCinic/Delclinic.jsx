import React , {useEffect,useState} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
function Delclinic() {
          const [Clinics,setCilinic]= useState([]);
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
          const deletehandle= async(id)=>{
                    try {
                              console.log(id);
                              // /api/reacherDepts/:_id
                              const res = await axios.delete(`http://localhost:4000/reacherDept/api/reacherDepts/${id}`)
                              const newClinicslist=Clinics.filter(cil=> cil._id !==id);
                              setCilinic(newClinicslist)
                    } catch (error) {
                              console.log(error);
                    }
                    
          }
          




  return (
    <>
          <Sidebar/>    
          <div className='admin'>
          <div className="patlist">
              <table id="customers" >
              <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department Phoneno</th><th>Opening Time</th><th>ClosingTime</th><th>Delete</th></tr>
              {Clinics.map((cil=>
              <tr>
                {(cil.departmentName == null) ?  <td>null</td> : <td>{cil.departmentName}</td>}
                {(cil.departmentHead == null) ?  <td>null</td> : <td>{cil.departmentHead}</td>}
                {(cil.departmentArea == null) ?  <td>null</td> : <td>{cil.departmentArea}</td>}
                {(cil.departmentEmployment== null) ?  <td>null</td> : <td>{cil.departmentEmployment}</td>}
                {(cil.departmentphoneno== null) ?  <td>null</td> : <td>{cil.departmentphoneno}</td>}
                {(cil.DepartmentOpeningtime== null) ?  <td>Unavailable</td> : <td>{cil.DepartmentOpeningtime}</td>}
                {(cil.DepartmentClosingtime== null) ?  <td>Unavailable </td> : <td>{cil.DepartmentClosingtime}</td>}
                <td> < button className='del' type="submit" onClick={e =>{deletehandle(cil._id); }} >Delete </button></td>
                
              </tr> 
                ))}
              </table>
          </div>
          </div>

      
    </>
  )
}

export default Delclinic
