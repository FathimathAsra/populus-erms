import React from "react";
import { NavLink } from 'react-router-dom'

function SideMenuLogin() {
  return (
    <div className="col-md-2 bg-light  bgs shadow-sm position-relative pt-5">
      <nav className="navbar bg-light flex-column position-fixed position-absolute mt-5 pt-5" style={{ left: 55, height: 'auto' }}>
        <div className="mx-auto d-flex flex-column mt-5 pt-5"></div>
        <div className="mx-auto d-flex flex-column mt-4">
          <a className="navbar-brand mx-auto" id="plogo" href={"/"}>
            Populus.
          </a>
        </div>
    
        <div className="flex-column mt-3">
          <ul className="nav flex-column nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link plink px-5" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink px-5" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideMenuLogin;
