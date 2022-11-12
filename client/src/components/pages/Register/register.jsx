import React, {useState} from 'react';
import axios from 'axios';
import Header from "../home/navbar";
import { NavLink } from 'react-router-dom';

function Register (){
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const [entries, setEntries] = useState([]);

// Add Food Item
   const addItem = async() => {
    //  e.preventDefault();
     try {
       const res = await axios.post(`http://localhost:4000/api/entry`,{fName: fName, lName: lName, email: email, password: password})
        // console.log(res.data);
        setEntries((prev) => [...prev, res.data]);
        // console.log(entries);
        

     } catch (error) {
       console.error(error);
     }
   }


  return (
    <div>
    <Header />
      <h1 className='heading-h1'>Register</h1>

      
    
      <form className="top">
        <input className = "form-input" type="text" placeholder="First Name" name="fName" onChange={(e)=>{setFname(e.target.value)}}/>
        <input className = "form-input" type="text" placeholder="Last Name" name="lName" onChange={(e)=>{setLname(e.target.value)}}/>
        <input className = "form-input" type="email" placeholder="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className = "form-input" type="password" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}} autoComplete = "false"/>
        <button className = "form-button btn btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}><NavLink to = "/login">submit</NavLink></button>
      </form>

      <div className="footer-reg">
                <p>Copyright Mayank Srivastava</p>
      </div>

    </div>
      
      
    
    
    
  );
}
export default Register;
