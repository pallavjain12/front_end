import React from "react"
import Student from './Student'

const Students = ({ StudentList }) => {  
  if (StudentList && StudentList.length == 0)
    return (
      <h4>No one enrolled in this course.</h4>
    )
  
  return (
    <div>
      <h2>Students Registered in this course are </h2>
      <table>
        <tr>
          <th>Roll Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        { 
          StudentList && StudentList.map(b =>
            <Student
              student={b}
            /> 
          )
        }
      </table>
    </div>
  )
}

export default Students
