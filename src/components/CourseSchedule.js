import React, { useState } from 'react'
import Schedules from './Schedules'
import Students from './Students'
import scheduleService from '../services/schedule'

const CourseSchedule = ({ courses }) => {  
    const [ stateCourseId, setCourseId ] = useState(-1)

    const [ students, setStudents ] = useState()

    const showStudents = async (id) => {
        try {
          const response = await scheduleService.getStudents(id)
          setStudents(response)
          setCourseId(id)
          debugger
        }
        catch(excepton) {
          alert('Unable to process request at the moment')
        }
    }
    
    if (courses && courses.length === 0)
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
                        <Schedules
                            schedules={c.schedules}
                        />
                        <button onClick={() => showStudents(c.id)}>
                            View Students List
                        </button>

                        {
                            students && stateCourseId === c.id &&
                            <Students
                                StudentList={students}
                            />
                        }
                    </div>
            );})}
        </div>
    )
}

export default CourseSchedule
