import axios from 'axios'

const scheduleUrl = `http://localhost:8080/erp-1.0-SNAPSHOT/api/employee/getCourseSchedulefor`
const studentsUrl = "http://localhost:8080/erp-1.0-SNAPSHOT/api/courses/students"

const getEmployeeSchedule = async (email) => {
  const response = await axios.get(`${scheduleUrl}/${email}`)
  return response.data
}

const getStudents = async (courseId) => {
  const response = await axios.get(`${studentsUrl}/${courseId}`)
  return response.data
}

const exportObject = { getEmployeeSchedule, getStudents }
export default exportObject