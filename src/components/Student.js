import React from 'react'

const Student = ({ student }) => {
  return (
    <tr>
      {/* Render the Bill's details */}
      <td>{student.roll_no}</td>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
    </tr>
  )
}
export default Student
