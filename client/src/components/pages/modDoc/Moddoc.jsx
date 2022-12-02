import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Sidebar from '../../Sidebar/Sidebar'

import 'react-edit-text/dist/index.css';
function Moddoc() {
        
          const [Doctors,setDoctor]= useState([]);
           const [updateItemText,setupdateItemText] = useState("");
          const [isUpdating, setisUpdating] = useState('');
          const [Number, setNumber] = useState(' ');
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
//       function HandleChange(){
//         return(
//         <button className="updated-new-btn" type="submit" onClick={ Number2() } >number</button>
//         )
        
//       }
//       function Number2(){
//         return(
//                 <input onChange={e => {setNumber(e.target.value)}} className="bottom" type="email" placeholder ="E-mail"/>
//         )
//       }
        function  renderUpdateForm  (){
                return(
          <><button className="updated-new-btn" type="submit" onClick={() => { Number2() } } >number</button><button className="updated-new-btn" type="submit">place</button>
        </>
        )}
        function Number2(){
                console.log("jsdgegd");
                return(
                        <>
                {/* // <input onChange={e => {setNumber(e.target.value)}} className="bottom" type="email" placeholder ="E-mail"/> */}
               
                </>
      )
        }       
  return (
        
          <>
          
          <Sidebar/>

        <div className='admin'>
                <div className="patlist">
                
                
                        <summary>Here are the list of all Doctor</summary>
                        <table id="customers" >
                        <tr><th>Doctor Full name</th><th>Speclization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th><th>Modifly</th></tr>
                        {Doctors.map((doc=>
                                
                                        isUpdating === doc._id ? renderUpdateForm():
                                <>      
                                        <tr>
                                        {(doc.docName == null) ? <td>null</td> : <td>{doc.docName}</td>}

                                        {(doc.docSpecilization == null) ? <td>null</td> : <td>{doc.docSpecilization}</td>}
                                        {(doc.Year == null) ? <td>null</td> : <td>{doc.Year}</td>}
                                        {(doc.docEmail == null) ? <td>null</td> : <td>{doc.docEmail}</td>}
                                        {(doc.docNumber == null) ? <td>null</td> : <td>{doc.docNumber}</td>}
                                        {(doc.docplace == null) ? <td>null</td> : <td>{doc.docplace}</td>}
                                        <td><td> <button className='del' type="submit" onClick={() => { handleChange(doc._id); } }>Modifly </button></td></td>
                                        </tr>
                                </> 
                                
                        
                        ))}
                        </table>
                        
                        
                </div>    
        </div>


          </>
  )
}

export default Moddoc
