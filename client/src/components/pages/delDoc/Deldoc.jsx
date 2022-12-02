import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../../Sidebar/Sidebar";
function Deldoc() {
          const [Doctors,setDoctor]= useState([]);
          const getDoctor =async() =>{
                    try {
                         const res= await axios.get('http://localhost:4000/Doc/api/doctors').then((res)=> setDoctor(res.data))
                    } catch (error) {console.log("rffgg"+error);}
          }
          useEffect(()=>{
                    getDoctor()
          },[])
const deletehandle= async(id)=>{
          try {
                    console.log(id);
                    const res = await axios.delete(`http://localhost:4000/Doc/api/doctors/${id}`)
                    const newDoctorslist=Doctors.filter(doc=> doc._id !==id);
                    setDoctor(newDoctorslist)
          } catch (error) {
                    console.log(error);
          }
          
} 
const renderUpdateForm = () => {
  return <form className = "update-form" onSubmit={(e)=>{updateItem(e)}}>
    <input className = "update-new-input" type="text" placeholder = "New Item" onChange={e => {setNewItemText(e.target.value)}} value={updateItemText}/>
    <button className = "update-new-btn" type="submit" onClick={refreshPage}>Update</button>
  </form>
}
  return (
    <>
     <Sidebar/>

<div className='admin'>
        <div className="patlist">
                
                <table id="customers" >
                <tr><th>Doctor Full name</th><th>Speclization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th> <th>Delete</th></tr>
                {Doctors.map((doc=>
                {
                isUpdating === item._id ? renderUpdateForm():
                <tr>     
                {(doc.docName == null) ?  <td>null</td> : <td>{doc.docName}</td>}
                {(doc.docSpecilization == null) ?  <td>null</td> : <td>{doc.docSpecilization}</td>}
                {(doc.Year == null) ?  <td>null</td> : <td>{doc.Year}</td>}
                {(doc.docEmail == null) ?  <td>null</td> : <td>{doc.docEmail}</td>}
                {(doc.docNumber == null) ?  <td>null</td> : <td>{doc.docNumber}</td>}
                {(doc.docplace == null) ?  <td>null</td> : <td>{doc.docplace}</td>}
                <td> < button className='del' type="submit" onClick={e =>{deletehandle(doc._id); }} >Delete </button></td>
                </tr> 
                }
                ))}
                </table>
                
        </div>    
</div>



      
    </>
  )
}

export default Deldoc
