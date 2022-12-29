import React , {useEffect,useState} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
import { Navigate, Navigator, useNavigate } from 'react-router-dom';
function Delclinic() {
          const [Clinics,setCilinic]= useState([]);
          const navigate = useNavigate();
          const getCilic = async ()=>{
            try {const res =await axios.get('http://localhost:4000/reacherDept/api/reacherDepts').then((res)=>setCilinic(res.data))}
             catch (error) {console.log(error);}}
          useEffect(()=>{getCilic()},[])

          const jump = async(id)=>{
            try {
                    navigate("/Co",{state: {id : id}});
            } catch (error) {
                    console.log(error);
            }
          } 
          const deletehandle= async(id)=>{
                    try {
                              console.log(id);
                              
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
          <div className="patlist"style={{left: "0px"}}>
              <table id="customers" >
              <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department Phoneno</th><th>Opening Time</th><th>ClosingTime</th><th>Delete</th><th>Modifly this element</th></tr>
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
                <td> <button className='del' onClick={e => {jump(cil._id)}} type="submit" >Modify this element</button></td>
              </tr> 
                ))}
              </table>
          </div>
          </div>

      
    </>
  )
}

export default Delclinic
