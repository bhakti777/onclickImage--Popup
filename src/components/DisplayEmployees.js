import React from "react";

const DisplayEmployees=({employee,handleShow})=>{

    return(
        <>
        
         <div key={employee.id}>
                  <h5>
                    <strong>
                      {employee.id}: {employee.first_name} {employee.last_name}
                    </strong>
                  </h5>

                  <p>{employee.email}</p>

                  <img src={employee.avatar}  onClick={()=>{handleShow(employee)}}/>

                </div>
        </>
    )
}

export default DisplayEmployees;