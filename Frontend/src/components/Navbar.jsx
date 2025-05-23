import React from 'react'
import "./Navbar.css"
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  return (
    <div className='navbar  '>
      <div className='innerContainer'>
      <p className='navbarText'> Buisiness Nexus</p>
      <div className='icons'>
      <SettingsIcon fontSize="medium" />
      <NotificationsIcon fontSize="medium" />
      <PersonIcon fontSize="medium" />
      </div>
      
      </div>
    </div>
  )
}

export default Navbar
