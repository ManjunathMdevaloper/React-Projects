import React, { useState } from 'react'
import { studentsdata } from '../Students/studentsdata'
import './students.css'
const Students = () => {
   let[data,setData] = useState(studentsdata);

  return (
    <>
        <div className="studentsdata">
            <div className="header">
                50 Students Details
            </div>
            <table >
                <thead>
                    <tr>
                        <th>StdId</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Place</th>
                    </tr>
                </thead>
                {studentsdata.map((ele,index)=>{
                  let {id,fname,lname,age,place} = ele
                  return(
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{fname}</td>
                            <td>{lname}</td>
                            <td>{age}</td>
                            <td>{place}</td>
                        </tr>
                    </tbody>
                  )
                })}
            </table>
        </div>
    </>
  )
}

export default Students
