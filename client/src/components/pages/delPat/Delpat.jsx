import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../../Sidebar/Sidebar";
import "./del.css"
function refreshPage() {
  window.location.reload(false);
}
function Delpat() {
          const [Patients,setPatient] = useState([]);
          const getPatient =async() => {
                    try {
                              const res = await axios.get('http://localhost:4000/Pat/Patients').then((res) =>setPatient(res.data));
                    } catch (error) {
                           console.log(error);   
                    }
                    
          }
          useEffect(()=>{
                    getPatient()
          },[])
const deletehandle= async(id)=>{
  try {
    console.log(id);
    const res = await axios.delete(`http://localhost:4000/Pat/api/Patients/${id}`)
    const newPatientslist=Patients.filter(pat=> pat._id !==id);
    setPatient(newPatientslist)
  } catch (error) {
    console.log(error);
  }
 
}          

  return (
    <>
      <Sidebar/>
    <div className="admin">
          <div className='patlist'>
                    
                    
                    <table id="customers" >
                    <tr>
                              <th>Patient Name</th><th>Patient Age</th><th>Patient Sex</th><th>Patient BloodGroup</th><th>Patient Area</th><th>Patient Disease</th><th>Patient Number</th><th>Delete Button</th>
                    </tr>
                                        {
                                        Patients.map((pat=>
                                         <tr>
                                                         
                                                            {(pat.patientName == null) ?  <td>null</td> : <td>{pat.patientName}</td>}
                                                            {(pat.patientAge == null) ?  <td>null</td> : <td>{pat.patientAge}</td>}
                                                            {(pat.patientSex == null) ?  <td>null</td> : <td>{pat.patientSex}</td>}
                                                            {(pat.patientBlood == null) ?  <td>null</td> : <td>{pat.patientBlood}</td>}
                                                            {(pat.patientPlace == null) ?  <td>nill</td> : <td>{pat.patientPlace}</td>}
                                                            {(pat.patientDisease == null) ?  <td>nill</td> : <td>{pat.patientDisease}</td>}
                                                            {(pat.patientNumber == null) ?  <td>0</td> : <td>{pat.patientNumber}</td>}
                                                          <td> < button className='del' type="submit" onClick={e =>{deletehandle(pat._id); }} >Delete </button></td>
                                                          {/* <td> < button className='del' type="submit" onClick={e =>{deletehandle(pat._id); }} >Delete </button></td> */}
                                        </tr>
                                        ))}
                    </table>
                    
                </div>
          </div>

    </>
  )
}

export default Delpat
