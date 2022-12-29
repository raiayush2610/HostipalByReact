import React, {useState} from 'react';
import axios from 'axios';
import "./register.css"
import Header from "../home/navbar";
import {useNavigate} from 'react-router-dom';

function Register (){
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const [entries, setEntries] = useState([]);
 
  const navigate = useNavigate();
// Add Food Item
   const addItem = async() => {
  
     try {
       const res = await axios.post(`http://localhost:4000/api/entry`,{fName: fName, lName: lName, email: email, password: password})
       
        setEntries((prev) => [...prev, res.data]);
      
        navigate("/Patient",{state:{email1:email,fName:fName,lName:lName}})
        

     } catch (error) {
       console.error(error);
     }
   }


  return (
    
    
    <div className="register">
      <Header />
      

      <form className="register-form">
      <h1 className='heading-h1'>Register</h1>
        <input className = "form-input" type="text" placeholder="First Name" name="fName" onChange={(e)=>{setFname(e.target.value)}}/>
        <input className = "form-input" type="text" placeholder="Last Name" name="lName" onChange={(e)=>{setLname(e.target.value)}}/>
        <input className = "form-input" type="email" placeholder="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className = "form-input" type="password" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}} autoComplete = "false"/>
        <button className = " btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>Sumbit</button>
        {/* ><NavLink to = "/Patient">submit</NavLink> */}
      </form>
      
    </div>
    
      
    
    
    
  );
}
export default Register;
