import axios from "axios";
import React, { useState, useEffect } from "react";
import{resp} from "../login/login";
import SuccessHeader from "./successHeader";
import Item from "./listItem";
let foundEntry = {}
function Success(){
    const [entries, setEntries] = useState([]);
     const [area, setArea] = useState("");
    useEffect(() => {
            async function getEntry(){
            try {
                const res = await axios.get("http://localhost:4000/api/entries")
                setEntries(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getEntry();
      }, []);

      entries.forEach(entry => {
        if(entry.email === resp){
            foundEntry = entry
        }

      })

    //   console.log(foundEntry);

const  setName = (name) => {
    setArea(name)
}
        
    return(
        <div className="success">
            <SuccessHeader name = {(foundEntry.fName)}/>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
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
                <h2 style={{"display": "inline-block", "margin-right": "15px"}}>Select your area:</h2>
                <h2 class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {area}
                            </h2>
                            <ul class="dropdown-menu">
                                {/* <Item onClick = {setName("Andhra Pradesh")} name = "Andhra Pradesh"/>
                                <Item onClick = {setName("Arunachal Pradesh")} name = "Arunachal Pradesh"/>
                                <Item onClick = {setName("Assam")} name = "Assam"/>
                                <Item onClick = {setName("Bihar")} name = "Bihar"/>
                                <Item onClick = {setName("Chhaittisgarh")} name = "Chhaittisgarh"/>
                                <Item onClick = {setName("Goa")} name = "Goa"/>
                                <Item onClick = {setName("Gujrat")} name = "Gujrat"/>
                                <Item onClick = {setName("Hariyana")} name = "Hariyana"/>
                                <Item onClick = {setName("Himachal Pradesh")} name = "Himachal Pradesh"/>
                                <Item onClick = {setName("Jharkhand")} name = "Jharkhand"/>
                                <Item onClick = {setName("Karnataka")} name = "Karnataka"/>
                                <Item onClick = {setName("Kerala")} name = "Kerala"/>
                                <Item onClick = {setName("Madhya Pradesh")} name = "Madhya Pradesh"/>
                                <Item onClick = {setName("Maharashtra")} name = "Maharashtra"/>
                                <Item onClick = {setName("Manipur")} name = "Manipur"/>
                                <Item onClick = {setName("Meghalaya")} name = "Meghalaya"/>
                                <Item onClick = {setName("Mizoram")} name = "Mizoram"/>
                                <Item onClick = {setName("Nagaland")} name = "Nagaland"/>
                                <Item onClick = {setName("Odisha")} name = "Odisha"/>
                                <Item onClick = {setName("Punjab")} name = "Punjab"/>
                                <Item onClick = {setName("Rajasthan")} name = "Rajasthan"/>
                                <Item onClick = {setName("Sikkim")} name = "Sikkim"/>
                                <Item onClick = {setName("Tamil Nadu")} name = "Tamil Nadu"/>
                                <Item onClick = {setName("Telangana")} name = "Telangana"/>
                                <Item onClick = {setName("Uttar Pradesh")} name = "Uttar Pradesh"/>
                                <Item onClick = {setName("Uttarakhand")} name = "Uttarakhand"/>
                                <Item onClick = {setName("West Bengal")} name = "West Bengal"/> */}

                                
                            </ul>
            </div>
        </div>
    )
}

export default Success;