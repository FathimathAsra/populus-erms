import React, { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../middleware/AdminAuthSlice.js'


function SideMenu() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  useEffect(() => {
    // if (isError) {
    //   // console.log(message)
    // }

    if (!user) {
      navigate('/login')
    }

    return () => {
      // dispatch(reset())
    }
  }, [user, navigate, dispatch])


  return (
    <div className="col-md-2 bg-light  bgs shadow-sm position-relative">
      <nav className="navbar bg-light flex-column position-fixed position-absolute" style={{ left: 55, height: 'auto' }}>
        <div className="mx-auto d-flex flex-column"></div>
        <div >
          <a className="navbar-brand mx-auto" id="plogo" href={"/"}>
            Populus.
          </a>
        </div>
        <div className="mx-auto d-flex flex-column mt-5">
          
          <img
          // eslint-disable-next-line 
            src={user && user.profilepic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
            alt="profile"
            className="img-fluid img-thumbnail r-circle mx-auto mb-3"
          />
        </div>
        <div className="mx-auto d-flex flex-column">
          <h4 className="mx-auto poppinh2 mb-0">{user && user.adminname}</h4>
          <p className="mx-auto poppinb">{user && user.position}</p>
        </div>
        <div className="flex-column mt-4">
          <ul className="nav flex-column nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/me">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/tasks">
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/files">
                Files
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/employees">
                Employee Profiles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/salary">
                Salary Records
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link plink" to="/Assets">
                Assets
              </NavLink>
            </li>
            <li className="mt-5">
              <button className="nav-link plink " onClick={onLogout}>
                Logout
              </button>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  )

};


export default SideMenu
