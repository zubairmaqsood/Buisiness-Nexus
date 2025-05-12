
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function DashboardLayout() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      
      <Outlet/> 
    </>
  )
}

export default DashboardLayout
