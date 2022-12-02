import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Sidebar from '../../Sidebar/Sidebar'
function Moddoc() {
          const [Doctors,setDoctor]= useState([]);
           const [updateItemText,setupdateItemText] = useState("");
          const [isUpdating, setisUpdating] = useState('');
          const getDoctor =async() =>{
                    try {
                         const res= await axios.get('http://localhost:4000/Doc/api/doctors').then((res)=> setDoctor(res.data))
                           
                    } catch (error) {
                              console.log("rffgg"+error);
                              
                    }
          }
          useEffect(()=>{
                    getDoctor()
          },[])
          const updateDoctor = async()=>{
                try {
                //       const res =await axios.update(`http://localhost:4000/Doc/updated/doctors/${isUpdating}`,{item:asd})  
                } catch (error) {
                        console.log(error);
                }
          }
          const handleChange= async(id)=>{
                try {
                          setisUpdating(id)
                        
                } catch (error) {
                          console.log(error);
                }
                
      } 
      const renderUpdateForm = () => (
        <form className="updated-form">
          <input className="update-new-input"type="text" placeholder=" New item" onChange={e=>{setupdateItemText(e.target.value)}} value={updateItemText}/>
          <button  className="updated-new-btn" type="submit">Update</button>
        </form>
      )
  return (
          <>
          <Sidebar/>

        <div className='admin'>
                <div className="patlist">
                        
                        <summary>Here are the list of all Doctor</summary>
                        <table id="customers" >
                        <tr><th>Doctor Full name</th><th>Speclization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th><th>Modifly</th></tr>
                        
                        
                        {Doctors.map((doc=>
                        {
                                isUpdating===doc._id ? renderUpdateForm() : 
                        
                        <tr>     
                        {(doc.docName == null) ?  <td>null</td> : <td>{doc.docName}</td>}
                        {(doc.docSpecilization == null) ?  <td>null</td> : <td>{doc.docSpecilization}</td>}
                        {(doc.Year == null) ?  <td>null</td> : <td>{doc.Year}</td>}
                        {(doc.docEmail == null) ?  <td>null</td> : <td>{doc.docEmail}</td>}
                        {(doc.docNumber == null) ?  <td>null</td> : <td>{doc.docNumber}</td>}
                        {(doc.docplace == null) ?  <td>null</td> : <td>{doc.docplace}</td>}
                        <td><td> < button className='del' type="submit" onClick={e =>{handleChange(doc._id); }}>Modifly </button></td></td>
                        </tr> 
                        }
                        ))}
                        </table>
                        
                </div>    
        </div>


          </>
  )
}

export default Moddoc
