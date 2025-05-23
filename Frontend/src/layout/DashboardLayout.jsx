import {  Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
import { jwtDecode } from 'jwt-decode'
import "./DashboardLayout.css"

function DashboardLayout() {
  const [role, setRole] = useState("")
  const [id, setId] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
     navigate("/login")
      return
    }
    const {id,role} = jwtDecode(token)
    setRole(role)
    setId(id)
    navigate(`/dashboard/${role}`)
    
  }, [])
  
  return (
    <>
      <Navbar/>
      <Sidebar id={id} role={role} />
      <div className='outlet'>
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout
