import React from 'react'

function tablecilnic(props) {
           console.log(props.name[0])
  return (
    <>
      <table id="customers" >
                    <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department Phoneno</th><th>Opening Time</th><th>ClosingTime</th></tr>
                  console.log(prop.departmentName);
                  {console.log( props.name[0])}
                    {/* {props.map((cil=>
                    
                    <tr>
                     {console.log(cil)}
                      {(cil.departmentName == null) ?  <td>null</td> : <td>{cil.departmentName}</td>}
                      {(cil.departmentHead == null) ?  <td>null</td> : <td>{cil.departmentHead}</td>}
                      {(cil.departmentArea == null) ?  <td>null</td> : <td>{cil.departmentArea}</td>}
                      {(cil.departmentEmployment== null) ?  <td>null</td> : <td>{cil.departmentEmployment}</td>}
                      {(cil.departmentphoneno== null) ?  <td>null</td> : <td>{cil.departmentphoneno}</td>}
                      {(cil.DepartmentOpeningtime== null) ?  <td>Unavailable</td> : <td>{cil.DepartmentOpeningtime}</td>}
                      {(cil.DepartmentClosingtime== null) ?  <td>Unavailable </td> : <td>{cil.DepartmentClosingtime}</td>}
                      
                    </tr> 
                      ))} */}
                    </table>
    </>
  )
}

export default tablecilnic;
