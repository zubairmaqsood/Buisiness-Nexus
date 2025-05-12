import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();


  return (
    <div className="sidebar">
        <div className="logoContainer">

        <div className='imgContainer'>
          <img className='img' src={logo} alt="logo" />
        </div>
        
      </div>

      <ul>
        <li>
          <NavLink to="" >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="" >
            Profile
          </NavLink>
        </li>
        <li>
          <button  className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;