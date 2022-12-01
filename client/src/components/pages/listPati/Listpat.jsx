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
                    <h1>Here are the list of all patient</h1>
                    <table id="customers" >
                    <tr>
                              <th>Patient Name</th><th>Patient Age</th><th>Patient Sex</th><th>Patient BloodGroup</th><th>Patient Area</th><th>Patient Disease</th><th>Patient Number</th>
                    </tr>
                                        {
                                        Patients.map((pat=>
                                         <tr>
                                                            <td>{pat.patientName}</td>
                                                            <td>{pat.patientAge}</td>
                                                            <td>{pat.patientSex}</td>
                                                            <td>{pat.patientBlood}</td>
                                                            <td>{pat.patientPlace}</td>
                                                            <td>{pat.patientDisease}</td>
                                                            <td>{pat.patientNumber}</td>
                                        </tr>
                                        ))}
                    </table>
                    </div>
          </div>
          </>
  )
}

export default Listpat;
