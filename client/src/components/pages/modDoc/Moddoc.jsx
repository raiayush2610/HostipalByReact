import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { Navigate, Navigator, useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar'

function Moddoc(props) {
       
        const navigate = useNavigate();
        const [Doctors,setDoctor]= useState([]);
        const getDoctor =async() =>{
                    try {const res= await axios.get(`http://localhost:4000/Doc/api/doctors`).then((res)=> setDoctor(res.data))}
                    catch (error) {console.log(error);}
                }
        useEffect(()=>{
                    getDoctor()
        },[])
        const jump = async(id)=>{
                try {navigate("/Mo",{state: {id : id}});}
                catch (error) {console.log(error);}
        }
           
  return (<>
        <Sidebar/>
        <div className='admin'>
                <div className="patlist">
                        <summary>Here are the list of all Doctor</summary>
                        {Doctors == null  ? <h1>null</h1> : 
                        <table id="customers" >
                                
                        <tr><th>Doctor Full name</th><th>Speclization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th><th>Modifly</th></tr>
                        {Doctors.map((doc=>
                                <>      
                                        <tr>
                                        {(doc.docName == null) ? <td>null</td> : <td>{doc.docName}</td>}
                                        
                                        {(doc.docSpecilization == null) ? <td>null</td> : <td>{doc.docSpecilization}</td>}
                                        {(doc.Year == null) ? <td>null</td> : <td>{doc.Year}</td>}
                                        {(doc.docEmail == null) ? <td>null</td> : <td>{doc.docEmail}</td>}
                                        {(doc.docNumber == null) ? <td>null</td> : <td>{doc.docNumber}</td>}
                                        {(doc.docplace == null) ? <td>null</td> : <td>{doc.docplace}</td>}
                                        <td> <button className='del' onClick={e => {jump(doc._id)}} type="submit" >Modify this element</button></td>
                                        
                                        </tr>
                                </> 
                        ))}
                        </table>
}
                </div>    
        </div>
          </>
  )
}

export default Moddoc
