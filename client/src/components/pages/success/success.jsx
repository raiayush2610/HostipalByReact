import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation ,useNavigate} from 'react-router-dom';
import './succes.css'
import SuccessHeader from "./successHeader";
import Item from "./listItem";
import DocPlace from "./docPlace"
import CiliniPlace from "./CiliniPlace";
import Card from "./Card";

let foundEntry = {}

function Success(){
    const location =useLocation();
    const [entries, setEntries] = useState([]);
    const [docAreas, setdocArea] = useState([]);
    const [cilAreas, setcilArea] = useState([]);
     const [Area, setArea] = useState(null);
     const emails = location.state.email1;
     const [doitem,setitem] =useState(1)
     const [cilitem,setcilitem] =useState(1)
    useEffect(() => {
            async function getEntry(){
            try {
                const res = await axios.get("http://localhost:4000/api/entries")
                setEntries(res.data);
            } catch (error) {console.log(error)}
        }
        async function getCinicPlace(){
            try {
                if (Area === null) {
                    console.log("null");
                }
                else{
                    const cils = await axios.get(`http://localhost:4000/reacherDept/dept/${Area}`)
                    console.log(cils.data)
                    if (cils.data==="Empty") {
                        console.log("yes");
                        
                    }
                     else {
                        if (cils.data.length === 0) {
                            console.log("Array is null");
                            setcilitem(0)
                        } else {
                            setcilArea(cils.data)
                            setcilitem(1)
                        }
                    }
                }         
            } catch (error) {
                console.log(error);
            }
         }
        // console.log(Area.length);
        async function getDoctorPlace(){
            // console.log(Area);
            try {
                    if (Area === null) {
                        // console.log("null");
                    }
                    else{
                        const res = await axios.get(`http://localhost:4000/Doc/doc/${Area}`)
                        // .then((res)=>setdocArea(res.data));
                        if (res.data==="Empty") {
                            // console.log("yes");
                            
                        } else {
                            if (res.data.length === 0) {
                                console.log("Array is null");
                                setitem(0)
                            } else {
                                setdocArea(res.data)
                                setitem(1)
                            }
                        }
                    } 
                    }catch (error) {console.log(error)}
                }

        getEntry();
        getDoctorPlace();
        getCinicPlace()
      }, [Area]);
 
      entries.forEach(entry => {
        if(entry.email === emails){
            foundEntry = entry
        }

      })
    
//    console.log(docArea);
    const Search=(e)=>{
        setArea(e.target.value);
       
    }
    return(
        
        <div className="success">
            <SuccessHeader name = {(foundEntry.fName)}/>
            
             
           
            <div className="row fex">
                <div className="col-lg-4">
                <Card fName= {foundEntry.fName} lName ={foundEntry.lName} email={foundEntry.email}/>
                </div>
            </div>
            <div className="area-selector">
                <div className="search-btn"><div><h5>Setect the State</h5> </div></div>
                    <select name="state" id="state" onChange={(e)=>Search(e)} class="form-control bottom ">
                               <option value="">State / UT * </option>
                                <Item  name = "Andhra Pradesh"/><Item  name = "Andaman"/><Item  name = "Arunachal Pradesh"/><Item  name = "Assam"/><Item  name = "Bihar"/><Item  name = "Chhaittisgarh"/><Item  name = "Goa"/><Item  name = "Gujrat"/><Item  name = "Hariyana"/><Item  name = "Himachal Pradesh"/><Item  name = "Jharkhand"/><Item  name = "Karnataka"/><Item  name = "Kerala"/><Item  name = "Madhya Pradesh"/><Item  name = "Maharashtra"/><Item  name = "Manipur"/><Item  name = "Meghalaya"/><Item  name = "Mizoram"/><Item  name = "Nagaland"/><Item  name = "Odisha"/><Item  name = "Punjab"/><Item name ="Puducherry"/><Item  name = "Rajasthan"/><Item  name = "Sikkim"/><Item  name = "Tamil Nadu"/><Item  name = "Telangana"/><Item  name = "Uttar Pradesh"/><Item  name = "Uttarakhand"/><Item  name = "West Bengal"/> 
                    </select>
                               
                                                
            </div>
            {console.log(doitem)}
            <DocPlace place = {(Area)}/>
            
            <div className="doc-place">
            {(doitem === 1) ?  
            <table id="customers" >
                        <tr><th>Doctor Full name</th><th>Speclization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th></tr>
                        {docAreas.map((doc=>
                        <tr>     
                        {(doc.docName == null) ?  <td>null</td> : <td>{doc.docName}</td>}
                        {(doc.docSpecilization == null) ?  <td>null</td> : <td>{doc.docSpecilization}</td>}
                        {(doc.Year == null) ?  <td>null</td> : <td>{doc.Year}</td>}
                        {(doc.docEmail == null) ?  <td>null</td> : <td>{doc.docEmail}</td>}
                        {(doc.docNumber == null) ?  <td>null</td> : <td>{doc.docNumber}</td>}
                        {(doc.docplace == null) ?  <td>null</td> : <td>{doc.docplace}</td>}
                        </tr> 
                        ))}
                        </table>
                        :
                        <h5>  Not Found</h5> 
                }
            </div>
            <CiliniPlace place ={(Area)}/>
            <div className="doc-place">
               
                {(cilitem === 1) ?
            <table id="customers" >
                    <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department Phoneno</th><th>Opening Time</th><th>ClosingTime</th></tr>
                  
                    {cilAreas.map((cil=>
                    
                    <tr>
                    
                      {(cil.departmentName == null) ?  <td>null</td> : <td>{cil.departmentName}</td>}
                      {(cil.departmentHead == null) ?  <td>null</td> : <td>{cil.departmentHead}</td>}
                      {(cil.departmentArea == null) ?  <td>null</td> : <td>{cil.departmentArea}</td>}
                      {(cil.departmentEmployment== null) ?  <td>null</td> : <td>{cil.departmentEmployment}</td>}
                      {(cil.departmentphoneno== null) ?  <td>null</td> : <td>{cil.departmentphoneno}</td>}
                      {(cil.DepartmentOpeningtime== null) ?  <td>Unavailable</td> : <td>{cil.DepartmentOpeningtime}</td>}
                      {(cil.DepartmentClosingtime== null) ?  <td>Unavailable </td> : <td>{cil.DepartmentClosingtime}</td>}
                      
                    </tr> 
                      ))}
                    </table>
                    : <h5> Not Found</h5>
                }
            </div>
        </div>
    )
}

export default Success;