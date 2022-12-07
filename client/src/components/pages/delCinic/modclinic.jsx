import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import {Location, useLocation} from 'react-router-dom';
function Modclinic() {
          const location =useLocation();
         
          const [Clinic,setCilinic] = useState([]);
          const [Whattesxt,setWhattesxt] = useState('')
          const [Upadetedtesxt,setUpadetedtext] = useState(" ")
          const [showForm, setShowForm] = useState(false);
          const [Clinicid,setClinicid] = useState('');
          const navigate = useNavigate();
          const  handleChange=(e)=>{
                    e.preventDefault(e);
                        const Value = e.target.value
                        setWhattesxt(Value)
          }
          const UpdatePatient = async(e)=>{
                    try {
                              const placeholder= Whattesxt;
                              console.log("place "+placeholder);
                              switch (placeholder) {
                                case ("departmentName"):
                                          console.log(Clinicid);
                                          
                                               const res =await axios.put(`http://localhost:4000/reacherDept/api/reacherDepts/${Clinicid}`,{departmentName:Upadetedtesxt}).then(navigate("/Modclinic"))
                                          break;

                                case ("departmentHead"):
                                          console.log("Age");
                                          const res1 =await axios.put(`http://localhost:4000/reacherDept/api/reacherDepts/${Clinicid}`,{patientAge:Upadetedtesxt}).then(navigate("/Modclinic"))
                                    
                                           break;
                                case ("departmentEmployment"):
                                          console.log("patientDisease");
                                          const res2 =await axios.put(`http://localhost:4000/reacherDept/api/reacherDepts/${Clinicid}`,{departmentEmployment:Upadetedtesxt}).then(navigate("/Modclinic"))
                               
                                          break;
                                case ("departmentphoneno"):
                                          console.log("patientNumber");
                                          const res3 =await axios.put(`http://localhost:4000/reacherDept/api/reacherDepts/${Clinicid}`,{departmentphonenor:Upadetedtesxt}).then(navigate("/Modclinic"))
                                 
                                          break;   
                                case ("Opentime"):
                                          console.log("DepartmentOpeningtime");
                                          const res4 =await axios.put(`http://localhost:4000/reacherDept/api/reacherDepts/${Clinicid}`,{Opentime:Upadetedtesxt}).then(navigate("/Modclinic"))
                                
                                          break;     
                                case ("Closetime"):
                                          console.log("patientPlace");
                                          const res5 =await axios.put(`http://localhost:4000/reacherDept/api/reacherDepts/${Clinicid}`,{Closetime:Upadetedtesxt}).then(navigate("/Modclinic"))
                                          break
                                default:
                                    console.log("no");
                              }
                    } catch (error) {console.log(error);}
          }
          const getCilic = async ()=>{
                    try {
                    const id =location.state.id;
                    setClinicid(id)
                    const res =await axios.get('http://localhost:4000/reacherDept/api/reacherDepts').then((res)=>setCilinic(res.data))}
                     catch (error) {console.log(error);}}
                  useEffect(()=>{getCilic(); renderUpdateForm1(); renderUpdateForm2()},[])
          const renderUpdateForm1= () => {
            return (<form className = '' >
               <label for="uniqe">This Text is have to Modifly:-</label>
               <input type="text" className="text-flied" id='uniqe' name ="ayush" onChange={e=>{setUpadetedtext(e.target.value)}} placeholder ={Whattesxt} autoComplete="false"/> 
               <button type="submit" style={{margin: "12px 12px 12px 12px 12px"}} className='del' onClick={e=>{e.preventDefault() ; UpdatePatient()}} >Submit</button>
            </form>)
          }
          const timeformate=()=>{
              setShowForm(!showForm)
            
          }
        const renderUpdateForm2= () => {
          return (<form className = '' >
          <label for="uniqe">This Text is have to Modifly:-</label>
          <input type="time" className="text-flied" id='uniqe' name ="ayush" onChange={e=>{setUpadetedtext(e.target.value)}} placeholder ={Whattesxt} autoComplete="false"/> 
          <button type="submit" style={{margin: "12px 12px 12px 12px 12px"}} className='del' onClick={e=>{e.preventDefault() ; UpdatePatient()}} >Submit</button>
       </form>)
            
          } 
  return (
    <div>
          <>
      <div className="patlist">
          <h5> Modifly the paticular item</h5>
            <form className='form-doc'>
                    
                  <input type="radio" value="departmentName"  id='departmentName' 
                    onClick={handleChange} name="departmentName"/>                  
                  <label for="departmentName">Department Name</label>
                    
                  <input type="radio" value="departmentHead" 
                    onChange={handleChange} name="departmentHead"/>
                  <label for="departmentHead">Department Head</label>

                  <input type="radio" value="departmentArea" 
                    onChange={handleChange} name="departmentArea"/>
                  <label for="departmentArea">Department Area</label>

                  <input type="radio" value="departmentEmployment" 
                    onChange={handleChange} name="departmentEmployment"/>
                  <label for="departmentEmployment">Department Employment</label>

                  <input type="radio" value="departmentphoneno" 
                    onChange={handleChange} name="departmentphoneno"/>
                  <label for="departmentphoneno">Department Phoneno</label>

                  <input type="radio" value="Opentime" 
                    onChange={handleChange} name="DepartmentOpeningtime"/>
                  <label for="DepartmentOpeningtime">Department Openingtime</label>

                  <input type="radio" value="Closetime" 
                    onChange={handleChange} name="Closetim"/>
                  <label for="DepartmentClosingtime">Department ClosingTime</label>
               </form>
          </div>    
          <div className="sumit-form" style={{margin: "120px 120px 120px 120px"}}>
          {/* { Upadetedtesxt === "Opentime" ? renderUpdateForm1():renderUpdateForm()} */}
          <button type="submit"  className='del' onClick={timeformate} >changetotime</button>
          {renderUpdateForm1()}
          {showForm && (renderUpdateForm2()) }
               <p>what is your press is --{'>'} {Whattesxt}</p>
               <p>You type  --{'>'} {Upadetedtesxt}</p>
          </div>
          
        {/* </div> */}
          </>
    </div>
  )
}

export default Modclinic
