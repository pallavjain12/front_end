import React from 'react'
import Schedules from './Schedules'

const CourseSchedule = ({ courses, showStudents }) => {  
    debugger
    if (courses && courses.length == 0)
    return (
        <div>
            <h2>You have no Courses Scheduled. Enjoy Your free Time! :)</h2>
        </div>
    )

    return (
        <div>
            {courses && courses.map(c => {
                return (
                    <div key={c.id}>
                        <h3 >Subject: {c.name}</h3>  <h3>Year: {c.year}</h3>
                        <h3>Capacity: {c.capacity}</h3>
                        {
                            c.specializations && c.specializations.length !== 0 &&
                            <table>
                            <tr>
                                <th>Specialization</th>
                                <th>Code</th>
                            </tr>
                            {
                                c.specializations.map(speci => {
                                    return (
                                        <tr>
                                        <td>{speci.name}</td>
                                        <td>{speci.code}</td>
                                    </tr>
                                    )
                                })
                            }
                            </table>
                        }
                        <button onClick={() => showStudents(c.id)}>
                            View Students List
                        </button>
                        <Schedules
                            schedules={c.schedules}
                        />
                    </div>
            );})}
        </div>
    )
}

export default CourseSchedule
