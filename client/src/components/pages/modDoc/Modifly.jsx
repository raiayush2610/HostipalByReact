import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
import './mod.css'
import {Location, useLocation} from 'react-router-dom';
function Modifly(){
  
  const location =useLocation();
  const [Doctors,setDoctor]= useState([]);
  const [Whattesxt,setWhattesxt] = useState('')
  const [Upadetedtesxt,setUpadetedtext] = useState('')

  const  handleChange=(e)=>{
        const Value = e.target.value
        setWhattesxt(Value)
      
  }
 console.log(Upadetedtesxt);
  const getDoctor =async() =>{
    try {
      const id = location.state.id;
         const res= await axios.get(`http://localhost:4000/Doc/api/doctor/${id}`).then((res)=> setDoctor(res.data))
        // const res = await axios.delete(`http://localhost:4000/Doc/api/doctors/${id}`)
           
    } catch (error) {
              console.log(error);
              alert("id is not found!")
    }
}
useEffect(()=>{
    getDoctor()
},[])
const updateDoctor = async()=>{
  try {
        // const res =await axios.update(`http://localhost:4000/Doc/updated/doctors/${isUpdating}`,{{Whattesxt}:Upadetedtesxt})  
  } catch (error) {
          console.log(error);
  }
}

const handlechange2 = async(e)=>{
  e.preventDefault();
  try {
    
  } catch (error) {
    console.log(error);
  }
 
}
        
  return (

    <>
    
    
    <Sidebar/>

    <div className='admin'>{console.log(Doctors)}
{/* 
    <h1>{Doctors.docName}</h1>
    <h1>{Doctors.docplace}</h1>
    <h1>{Doctors.docName}</h1>
    <h1>{Doctors.docSpecilization}</h1>
    <h1>{Doctors.Year}</h1> */}
      <h5> Modifly the paticular item</h5>
    </div>
    <div className="patlist">
 
      
      <form className='form-doc'>
            <input type="radio" value="docName"  id='docname'
              onChange={handleChange} name="docName" />
            <label for="docname">docName</label>

            <input type="radio" value="docplace" 
              onChange={handleChange} name="docplace"/>
            <label for="docplace">docplace</label>

            <input type="radio" value="docSpecilization" 
              onChange={handleChange} name="docSpecilization"/>
            <label for="docSpecilization">docSpecilization</label>
         </form>
        <form >
        {/* <input type="text" className="bottom"  name ="ayush"  placeholder ={Whattesxt} autoComplete="false"/> */}
        <input type="text" className="bottom"  name ="ayush" onChange={e=>{setUpadetedtext(e.target.value)}} placeholder ={Whattesxt} autoComplete="false"/>
        <button type="submit" onClick={handlechange2}>Submit</button>
        </form>
         <p>what is your press is --{'>'} {Whattesxt}</p>
     
    </div>
    </>
  )
}

export default Modifly
