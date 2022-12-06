import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
import './mod.css'
import {Location, useLocation} from 'react-router-dom';
function Modifly(){
  
  
  const location =useLocation();
  const [Doctors,setDoctor]= useState([]);
  const [Whattesxt,setWhattesxt] = useState('')
  const [Upadetedtesxt,setUpadetedtext] = useState(" ")
  const [doctorid,setDoctorid] = useState('');
  const [docflied,setDocfliedname] = useState('');
  // const [isChecked, setIsChecked] = useState(false)

  const reloadPage = () => {
    window.location.reload()
  }
  const  handleChange=(e)=>{
    e.preventDefault(e);
        const Value = e.target.value
        setWhattesxt(Value)

  }

  const getDoctor =async() =>{
    try {
      const id = location.state.id;
      setDoctorid(id)
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
const UpdateDoctor = async(e)=>{
 
  try {  const placeholder= Whattesxt;
    console.log("place "+placeholder);
    
    switch (placeholder) {
      case ("docName"):
        // console.log("value "+Upadetedtesxt);
          const res =await axios.put(`http://localhost:4000/Doc/updated/doctors/${doctorid}`,{docName:Upadetedtesxt}).then(console.log("succefully"))
          break;
      case "docplace":
        const res1 =await axios.put(`http://localhost:4000/Doc/updated/doctors/${doctorid}`,{docplace:Upadetedtesxt}).then(console.log("succefully"))
          break;
      case "docSpecilization":
        console.log("dsfhsd");
        const res2 =await axios.put(`http://localhost:4000/Doc/updated/doctors/${doctorid}`,{docSpecilization:Upadetedtesxt}).then(console.log("succefully"))
          break;   
      default:
          console.log("no");
          break;
  }
  

   

  } catch (error) {
          console.log(error);
  }
}
      
  return (

    <>
    
    
    <Sidebar/>

    <div className='admin'>
{/* 
    <h1>{Doctors.docName}</h1>
    <h1>{Doctors.docplace}</h1>
    <h1>{Doctors.docName}</h1>
    <h1>{Doctors.docSpecilization}</h1>
    <h1>{Doctors.Year}</h1> */}
      <h5> Modifly the paticular item</h5>
    
    <div className="patlist">
 
    
      <form className='form-doc'>
            <input type="radio" value="docName"  id='docname' 
              onClick={handleChange} name="docName"  
              />
            
            <label for="docname">docName</label>

            <input type="radio" value="docplace" 
              onChange={handleChange} name="docplace"/>
            <label for="docplace">docplace</label>

            <input type="radio" value="docSpecilization" 
              onChange={handleChange} name="docSpecilization"/>
            <label for="docSpecilization">docSpecilization</label>
         </form>

        <form className=''>
        {/* <input type="text" className="bottom"  name ="ayush"  placeholder ={Whattesxt} autoComplete="false"/> */}
        <label for="uniqe">This {Whattesxt} is have to Modifly:-</label>
        <input type="text" className="bottom" id='uniqe' name ="ayush" onChange={e=>{setUpadetedtext(e.target.value)}} placeholder ={Whattesxt} autoComplete="false"/>
        <button type="submit" onClick={e=>{e.preventDefault() ; UpdateDoctor()}} >Submit</button>
      
        </form>
         <p>what is your press is --{'>'} {Whattesxt}</p>
         <p>You type  --{'>'} {Upadetedtesxt}</p>
     
    </div>
    </div>
    </>
  )
}

export default Modifly
