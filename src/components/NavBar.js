import React from 'react'

const NavBar = ({ user, setUser, setCourses, setStudents }) => {
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setCourses(null)
    setStudents(null)
    setUser(null)
  }

  if (!user)
    return null

  return (
    <div className='regular-shadow mb-1'>
      <nav className='navbar navbar-expand-lg navbar-dark' id='menu'>
        <h2 >Welcome, {user.firstName} {user.lastName}</h2>
        <div><button className='btn btn-primary' onClick={logout}>Logout</button></div>
      </nav>
    </div>
  )
}

export default NavBar