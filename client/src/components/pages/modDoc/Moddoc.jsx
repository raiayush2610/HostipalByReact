import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Sidebar from '../../Sidebar/Sidebar'
function Moddoc() {
          const [Doctors,setDoctor]= useState([]);
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
  return (
          <>
          <Sidebar/>

        <div className='admin'>
                <div className="patlist">
                        
                        <summary>Here are the list of all Doctor</summary>
                        <table id="customers" >
                        <tr><th>Doctor Full name</th><th>Speclization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th><th>Modifly</th></tr>
                        {Doctors.map((doc=>
                        <tr>     
                        {(doc.docName == null) ?  <td>null</td> : <td>{doc.docName}</td>}
                        {(doc.docSpecilization == null) ?  <td>null</td> : <td>{doc.docSpecilization}</td>}
                        {(doc.Year == null) ?  <td>null</td> : <td>{doc.Year}</td>}
                        {(doc.docEmail == null) ?  <td>null</td> : <td>{doc.docEmail}</td>}
                        {(doc.docNumber == null) ?  <td>null</td> : <td>{doc.docNumber}</td>}
                        {(doc.docplace == null) ?  <td>null</td> : <td>{doc.docplace}</td>}
                        <td><td> < button className='del' type="submit">Modifly </button></td></td>
                        </tr> 
                        ))}
                        </table>
                        
                </div>    
        </div>


          </>
  )
}

export default Moddoc
