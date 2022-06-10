import React from 'react';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import TimeWidget from '../ui.components/TimeWidget';
import WeatherWidget from '../ui.components/Weather.widget';
import Quote from 'inspirational-quotes'
import { useSelector } from 'react-redux'
import ViewTodoComponentDashboard from "../ui.components/viewTodo.componentsDashBoard"



function ProfileDashboard() {
  const { user } = useSelector((state) => state.auth)
 

  return (
    <div className="row bgm vh-100">
      <SideMenu />
      <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50,}}>
        <TimeBar />
        <div className="row mt-5">
          <div className="col-md-11">
            <h1 className="poppinh1">Dashboard</h1>
          </div>
        </div>
        <div className="row mt-4 pt-2">
          <div className='row'>
            <div className='col-md-8'>
              <div className="row container-fluid shadow-sm pt-5" style={{ height: '200px', borderRadius: '6px', borderStyle: 'none', backgroundColor: '#dbf3fd' }}>
                <p className='display-5 fw-normal' style={{ color: '#2d7694' }} >Greetings, {user && user.adminname}!</p>
                <p>{Quote.getRandomQuote()}</p>
              </div>
              <div className="row container-fluid overflow-auto bg-light shadow-sm p-4 mt-4" style={{ height: 'auto', borderRadius: '6px', borderStyle: 'none' }}>
                <div className="row">
                  <h3 className="poppinh3 pt-2 fw-bolder">You need to do</h3>
                </div>
                <ViewTodoComponentDashboard />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='conatiner-fluid text-center bg-light shadow-sm pt-4 mb-4'>
                <TimeWidget />
              </div>
              <div className='row'>
                <WeatherWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}

export default ProfileDashboard;