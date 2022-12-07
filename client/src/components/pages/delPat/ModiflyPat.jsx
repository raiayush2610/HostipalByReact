import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import {Location, useLocation} from 'react-router-dom';
function ModiflyPat() {
          const location =useLocation();
         
          const [Patients,setPatient] = useState([]);
          const [Whattesxt,setWhattesxt] = useState('')
          const [Upadetedtesxt,setUpadetedtext] = useState(" ")
          const [Patientid,setpatintid] = useState('');
          const navigate = useNavigate();

          const  handleChange=(e)=>{
                    e.preventDefault(e);
                        const Value = e.target.value
                        setWhattesxt(Value)
          }
          const UpdatePatient = async(e)=>{
                    try {  const placeholder= Whattesxt;
                              console.log("place "+placeholder);

                              switch (placeholder) {
                                        case ("patientName"):
                                                  console.log(Patientid);
                                                  
                                                       const res =await axios.put(`http://localhost:4000/Pat/updated/patient/${Patientid}`,{patientName:Upadetedtesxt}).then(navigate("/Delpatient"))
                                                  break;

                                        case ("patientAge"):
                                                  console.log("Age");
                                                  const res1 =await axios.put(`http://localhost:4000/Pat/updated/patient/${Patientid}`,{patientAge:Upadetedtesxt}).then(navigate("/Delpatient"))
                                            
                                                   break;
                                        case ("patientDisease"):
                                                  console.log("patientDisease");
                                                  const res2 =await axios.put(`http://localhost:4000/Pat/updated/patient/${Patientid}`,{patientDisease:Upadetedtesxt}).then(navigate("/Delpatient"))
                                       
                                                  break;
                                        case ("patientNumber"):
                                                  console.log("patientNumber");
                                                  const res3 =await axios.put(`http://localhost:4000/Pat/updated/patient/${Patientid}`,{patientNumber:Upadetedtesxt}).then(navigate("/Delpatient"))
                                         
                                                  break;   
                                        case ("patientBlood"):
                                                  console.log("patientBlood");
                                                  const res4 =await axios.put(`http://localhost:4000/Pat/updated/patient/${Patientid}`,{patientBlood:Upadetedtesxt}).then(navigate("/Delpatient"))
                                        
                                                  break;     
                                        case ("patientPlace"):
                                                  console.log("patientPlace");
                                                  const res5 =await axios.put(`http://localhost:4000/Pat/updated/patient/${Patientid}`,{patientPlace:Upadetedtesxt}).then(navigate("/Delpatient"))
                                                  break
                                        default:
                                            console.log("no");
                                            break;
                                    }
                    }
                    catch(error){
                              console.log(error);

                    }
                    
          }
          
          const getPatient =async() => {
                    try {const id =location.state.id;
                              setpatintid(id)
                              const res = await axios.get('http://localhost:4000/Pat/Patients').then((res) =>setPatient(res.data));}
                     catch (error) {console.log(error);alert("id is not found!")}}
          useEffect(()=>{getPatient()},[])
  return (
          <>
          <Sidebar/>

          {/* <div className='admin'> */}
          
         
          <div className="patlist">
          <h5> Modifly the paticular item</h5>
            <form className='form-doc'>
                    
                  <input type="radio" value="patientName"  id='patientName' 
                    onClick={handleChange} name="patientName"/>                  
                  <label for="patientName">Patient Name</label>
                    
                  <input type="radio" value="patientAge" 
                    onChange={handleChange} name="patientAge"/>
                  <label for="patientAge">Patient Age</label>

                  <input type="radio" value="patientDisease" 
                    onChange={handleChange} name="patientDisease"/>
                  <label for="patientDisease">Patient Disease</label>

                  <input type="radio" value="patientNumber" 
                    onChange={handleChange} name="patientNumber"/>
                  <label for="patientNumber">Patient Number</label>

                  <input type="radio" value="patientBlood" 
                    onChange={handleChange} name="patientBlood"/>
                  <label for="patientBlood">Patient Blood</label>

                  <input type="radio" value="patientPlace" 
                    onChange={handleChange} name="patientPlace"/>
                  <label for="patientPlace">Patient Place</label>
               </form>
          </div>    
          <div className="sumit-form" style={{marginTop: "67px"}}>
              <form className=''>
              {/* <input type="text" className="bottom"  name ="ayush"  placeholder ={Whattesxt} autoComplete="false"/> */}
              <label for="uniqe">This Text is have to Modifly:-</label>
              <input type="text" className="text-flied" id='uniqe' name ="ayush" onChange={e=>{setUpadetedtext(e.target.value)}} placeholder ={Whattesxt} autoComplete="false"/>
              <button type="submit" className='del' onClick={e=>{e.preventDefault() ; UpdatePatient()}} >Submit</button>
            
              </form>
               <p>what is your press is --{'>'} {Whattesxt}</p>
               <p>You type  --{'>'} {Upadetedtesxt}</p>
          </div>
          
        {/* </div> */}
          </>
  )
}

export default ModiflyPat
