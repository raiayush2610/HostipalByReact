import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import Sidebar from "../../Sidebar/Sidebar";
function Patient() {
  const location =useLocation();
  const [patName,setpatName]= useState('');
  const [patAge,setpatAge]= useState( );
  const [patSex,setpatSex]= useState('');
  const [patBlood,setpatBlood]= useState('');
  const [patDisease,setpatDisease]= useState('');
  const [patno,setpatno]= useState();
  const [patState,setpatState]= useState();
  const [entry,setEntry]= useState([]);
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const Email = location.state.email1;
  const First_Name = location.state.fName;
  const Last_Name = location.state.lName
  // console.log(location.state.email1);
 
  // setEmail(Email)
  // console.log("set"+email);
  // console.log(location.state.fName);
  // console.log(location.state.lName);
  const addItem = async() => {
    //  e.preventDefault();
    setEmail(Email)
     try {
      console.log(patBlood);
     
       const res = await axios.post(`http://localhost:4000/Pat/Patient`,
       {
        patName: patName,
        patAge:patAge,
        patSex:patSex,
        patBlood:patBlood,
        patDisease:patDisease,
        patNumber:patno,
        place:patState
      })
        setEntry((prev) => [...prev, res.data]);
        console.log(email);
        navigate("/success",{state: {email1 : Email}});
     } catch (error) {
       console.error(error);
     }
   }
  
  return (
    <>
      <Sidebar/>
    <main class="form-signin">
    <form>    
      <h1 class="h3 mb-3 mb-4 fw-normal">Patient Form </h1>   
  
      <div class="form-floating">
        <input type="text" name="patName" value={First_Name + " " + Last_Name} class="form-control bottom" id="floatingInput1" placeholder="Patient Full name:" onChange={(e)=>{setpatName(e.target.value)}}required autoFocus/>
        <label htmlFor="floatingInput1">Patient Full name:</label>
      </div>
      <div class="form-floating">
        <input type="text" name="patAge"  class="form-control bottom" id="floatingInput2" placeholder="Patient's Age" onChange={(e)=>{setpatAge(e.target.value)}}required/>
        <label htmlFor="floatingInput2">Patient's Age</label>
      </div>
      <div class="form-floating">
        <input type="text" name="patSex" class="form-control bottom" id="floatingInput2" placeholder="Sex"  onChange={(e)=>{setpatSex(e.target.value)}}required/>
        <label htmlFor="floatingInput2">Patient's Sex</label>
      </div>
      <div class="form-floating">
          <input type="text" name="patBlood"class="form-control bottom" id="floatingBlood " onChange={(e)=>{setpatBlood(e.target.value)}}placeholder="Blood group"required/>
          <label htmlFor="floatingBlood ">Blood group</label>
      </div>
      <div class="form-floating">
        <input type="text" name="patDisease"class="form-control bottom" id="floatingdisease" onChange={(e)=>{setpatDisease(e.target.value)}}placeholder="Patient Disease"required/>
        <label htmlFor="floatingdisease">Patient Disease</label>
    </div>
    <div class="form-floating">
      <input type="tel" name="patNumber"class="form-control bottom" id="floatingPhone"onChange={(e)=>{setpatno(e.target.value)}} placeholder="Patient Phone Number:-"required />
      <label htmlFor="floatingPhone">Patient Phone Number:-</label>
  </div>
      <div class="form-floating">
        <select name="state" id="selectBox" onChange={(e)=>{setpatState(e.target.value)}} class="form-control bottom " >
          <option value="">State / UT *</option>
                                      <option value="Andaman">Andaman &amp; Nicobar Islands</option>
                                      <option value="Andhra_Pradesh">Andhra Pradesh</option>
                                      <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                                      <option value="Assam">Assam</option>
                                      <option value="Bihar">Bihar</option>
                                      <option value="Chandigarh">Chandigarh</option>
                                      <option value="Chattisgarh">Chattisgarh</option>
                                      <option value="Dadra_Nagar_Haveli">Dadra &amp; Nagar Haveli</option>
                                      <option value="Daman_Diu">Daman &amp; Diu</option>
                                      <option value="Goa">Goa</option>
                                      <option value="Gujarat">Gujarat</option>
                                      <option value="Haryana">Haryana</option>
                                      <option value="Himachal_Pradesh">Himachal Pradesh</option>
                                      <option value="Jammu_Kashmir">Jammu and Kashmir</option>
                                      <option value="Jharkhand">Jharkhand</option>
                                      <option value="Karnataka">Karnataka</option>
                                      <option value="Kerala">Kerala</option>
                                      <option value="Ladakh">Ladakh</option>
                                      <option value="Lakshadweep">Lakshadweep</option>
                                      <option value="Madhya_Pradesh">Madhya Pradesh</option>
                                      <option value="Maharashtra">Maharashtra</option>
                                      <option value="Manipur">Manipur</option>
                                      <option value="Meghalaya">Meghalaya</option>
                                      <option value="Mizoram">Mizoram</option>
                                      <option value="Nagaland">Nagaland</option>
                                      <option value="NCR">NCT OF Delhi</option>
                                      <option value="Odisha">Odisha</option>
                                      <option value="Puducherry">Puducherry</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Rajasthan">Rajasthan</option>
                                      <option value="Sikkim">Sikkim</option>
                                      <option value="Tamil_Nadu">Tamil Nadu</option>
                                      <option value="Telangana">Telangana</option>
                                      <option value="Tripura">Tripura</option>
                                      <option value="Uttar_Pradesh">Uttar Pradesh</option>
                                      <option value="Uttarakhand">Uttarakhand</option>
                                      <option value="West_Bengal">West Bengal</option>
                              </select>
    </div>
    
    
      
  
     
      <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>Add as Patient </button>
      <p class="mt-5 mb-3 text-muted">&copy; hostpital</p>
    </form>
  </main>
 
   
    </>
  )
}

export default Patient;
