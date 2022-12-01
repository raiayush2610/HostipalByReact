import { useState } from 'react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import Sidebar from "../../Sidebar/Sidebar";
import "./list.css"

function Listpat() {
          const [Patients,setPatient] = useState([]);
          const getPatient =async() => {
                    try {
                              const res = await axios.get('http://localhost:4000/Pat/Patients')
                              const  patientDetails =res.data
                              setPatient(patientDetails)
                    } catch (error) {
                           console.log(error);   
                    }
                    
          }
          useEffect(()=>{
                    getPatient()
          },[])
  return (
          <>
          <Sidebar/>
    <div className="admin">
          <div className='patlist'>
                    
                    <details>
                    <summary>Here are the list of all patient</summary>
                    <table id="customers" >
                    <tr>
                              <th>Patient Name</th><th>Patient Age</th><th>Patient Sex</th><th>Patient BloodGroup</th><th>Patient Area</th><th>Patient Disease</th><th>Patient Number</th>
                    </tr>
                                        {
                                        Patients.map((pat=>
                                         <tr>
                                                            {/* <td>{pat.patientName}</td>
                                                            <td>{pat.patientAge}</td>
                                                            <td>{pat.patientSex}</td> */}

                                                            {/* {(pat.patientBlood == null) ?  <td>null</td> : <td>{pat.patientBlood}</td>} */}
                                                            {(pat.patientName == null) ?  <td>null</td> : <td>{pat.patientName}</td>}
                                                            {(pat.patientAge == null) ?  <td>null</td> : <td>{pat.patientAge}</td>}
                                                            {(pat.patientSex == null) ?  <td>null</td> : <td>{pat.patientSex}</td>}
                                                            {(pat.patientBlood == null) ?  <td>null</td> : <td>{pat.patientBlood}</td>}
                                                            {(pat.patientPlace == null) ?  <td>nill</td> : <td>{pat.patientPlace}</td>}
                                                            {(pat.patientDisease == null) ?  <td>nill</td> : <td>{pat.patientDisease}</td>}
                                                            {(pat.patientNumber == null) ?  <td>0</td> : <td>{pat.patientNumber}</td>}
                                                          
                                        </tr>
                                        ))}
                    </table>
                    </details>
                </div>
          </div>
          </>
  )
}

export default Listpat;
