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
