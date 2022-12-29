import React,{useState} from "react";
// import Sidebar from "../../Sidebar/Sidebar";
import  Toast  from "../toast";
import ToastContainer from "../toastContai"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./admin.css"
function Admin(){
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    const [entries, setEntries] = useState([]);
    const addItem = async() => {
  
        try {
          const res = await axios.post(`http://localhost:4000/admin/register`,{ username: email, password: password})
           
          console.log(res.data);
          if  (res.data.message ) {return Toast.error(res.data.message)}
           setEntries((prev) => [...prev, res.data]);
         
           // navigate("/Patient",{state:{email1:email,fName:fName,lName:lName}})
           
   
        } catch (error) {
          console.error(error);
        }
      }   
     return (
      <>
      <ToastContainer position="bottom-center" limit={1}/>
       
       <div className="register">
         <form className="register-form">
         <h1 className='heading-h1'>Register</h1>
           <input className = "form-input" type="email" placeholder="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
           <input className = "form-input" type="password" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}} autoComplete = "false"/>
           <button className = " btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>Sumbit</button>
           {/* ><NavLink to = "/Patient">submit</NavLink> */}
         </form>
         
       </div>
       </>
     )
}
export default Admin;
