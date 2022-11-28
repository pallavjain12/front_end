import React from 'react'
import Schedule from './schedule'

const Schedules = ({ schedules }) => {  
  if (schedules === [])
    return null

  return (
    <div>
      <h2>Your Schedule</h2>
      <table cellPadding={10}>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Room</th>
          <th>Building</th>
        </tr>
        { 
          schedules && schedules.map(s =>
            <Schedule
              schedule={s}
            /> 
          )
        }
      </table>
    </div>
  )
}

export default Schedules
