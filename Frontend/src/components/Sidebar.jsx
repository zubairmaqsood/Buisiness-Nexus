
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import './Sidebar.css';

function Sidebar({id, role }) {

  return (
    <div className="sidebar">
      <div className="logoContainer">

        <div className='imgContainer'>
          <img className='img' src={logo} alt="logo" />
        </div>

      </div>

      <ul>
        <li>
          <NavLink  to={`/dashboard/${role}`} >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={`/dashboard/${role}/request`}>
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink to={`/dashboard/${role}/profile/:${id}`} >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="logout-button" to="/logout">
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;