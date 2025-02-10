import React, { useContext, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { useEffect } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin=(email,password)=>{
    if (email == 'admin@me.com' && password=='123') {
      setUser("admin")
      console.log(user);
      
    }else if(email="user@gmail.com" && password=='123'){
      setUser("employee")
    } 
    else {
      alert("Invalid credantials")
    }
  }

  const data =useContext(AuthContext)

  return (
    <>
      {!user?<Login handleLogin={handleLogin} />:''}
      {user=='admin'?<AdminDashboard />:user=="employee" ? <EmployeeDashboard/>:null}
    </>
  )
}

export default App