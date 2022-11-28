import React from 'react'

const Schedule = ({ schedule }) => {
  return (
    <tr>
      <td>{schedule.day}</td>
      <td>{schedule.time}</td>
      <td>{schedule.room}</td>
      <td>{schedule.building}</td>
    </tr>
  )
}

export default Schedule
