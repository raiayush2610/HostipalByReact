import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation ,useNavigate} from 'react-router-dom';
import './succes.css'
import SuccessHeader from "./successHeader";
import Item from "./listItem";

let foundEntry = {}

function Success(){
    const location =useLocation();
    const [entries, setEntries] = useState([]);
     const [Area, setArea] = useState(" ");
     const emails = location.state.email1;
    
    useEffect(() => {
            async function getEntry(){
            try {
                const res = await axios.get("http://localhost:4000/api/entries")
                setEntries(res.data);
            } catch (error) {console.log(error)}
            
        }

        getEntry();
      }, []);

      entries.forEach(entry => {
        if(entry.email === emails){
            foundEntry = entry
        }

      })
      const Search =()=>{
        console.log(Area);
    }
    

    

      
        
    return(
        <div className="success">
            <SuccessHeader name = {(foundEntry.fName)}/>
            <div className="row fex">
                <div className="col-lg-4">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Basic Info</h5>
                            <h6 className="info">First Name:  </h6> <p className="info">{foundEntry.fName}</p><br/>
                            <h6 className="info">Last Name:  </h6> <p className="info">{foundEntry.lName}</p><br />
                            <h6 className="info">Email:  </h6> <p className="info">{foundEntry.email}</p><br/>
                            <div class="nav-item dropdown">
                            
                            <h6 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Disease
                            </h6>
                            <ul class="dropdown-menu">
                                <li><p class="dropdown-item">Action</p></li>
                                <li><p class="dropdown-item">Another action</p></li>
                                <li><p class="dropdown-item">Something else here</p></li>
                            </ul>
                            </div>
                            
                        
                    </div>
                </div>
                </div>
            </div>
            <div className="area-selector">
                                 <div className="search-btn">
                                    <div><h5>Setect the State</h5> </div>
                                    <div><button onClick={e=>{Search(e.preventDefault())}}>Search Again</button></div>
                                 </div>
                                   
                            <select name="state" id="state"  onChange={(e)=>{setArea(e.target.value)}}class="form-control bottom ">
                               
                                <option value="">State / UT *</option>
                                <Item  name = "Andhra Pradesh"/>
                                <Item  name = "Arunachal Pradesh"/>
                                <Item  name = "Assam"/>
                                <Item  name = "Bihar"/>
                                <Item  name = "Chhaittisgarh"/>
                                <Item  name = "Goa"/>
                                <Item  name = "Gujrat"/>
                                <Item  name = "Hariyana"/>
                                <Item  name = "Himachal Pradesh"/>
                                <Item  name = "Jharkhand"/>
                                <Item  name = "Karnataka"/>
                                <Item  name = "Kerala"/>
                                <Item  name = "Madhya Pradesh"/>
                                <Item  name = "Maharashtra"/>
                                <Item  name = "Manipur"/>
                                <Item  name = "Meghalaya"/>
                                <Item  name = "Mizoram"/>
                                <Item  name = "Nagaland"/>
                                <Item  name = "Odisha"/>
                                <Item  name = "Punjab"/>
                                <Item  name = "Rajasthan"/>
                                <Item  name = "Sikkim"/>
                                <Item name = "Tamil Nadu"/>
                                <Item  name = "Telangana"/>
                                <Item  name = "Uttar Pradesh"/>
                                <Item  name = "Uttarakhand"/>
                                <Item  name = "West Bengal"/> 
                                </select>
                                                
            </div>
        </div>
    )
}

export default Success;