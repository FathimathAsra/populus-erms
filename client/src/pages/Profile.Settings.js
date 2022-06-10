import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import React from 'react';
import { useSelector } from 'react-redux'


const ProfileSettings = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
 

  return (
    <div className="row bgm vh-100" >
      <SideMenu />
      <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, }}>
        <TimeBar />
        <div className="row mt-5">
          <div className="col-md-11">
            <h1 className="poppinh1">Profile Settings</h1>
          </div>
        </div>
        <div className="row mt-4 pt-2">
          <div className='col'>
            <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: '6px', borderStyle: 'none' }}>
              <div className="row">
                <h3 className="poppintitle px-3 pt-2">Personal info</h3>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="row pt-5 text-center">
                    <div  >
                      <img src={currentUser.profilepic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} id="file" alt="profile pic" className='r-circle-profile' />
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="text-center">
                      <p className="poppinh3" style={{ color: 'black' }}>{currentUser.adminname}</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='row pt-5'>
                    <>
                      <div className='col'>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Name</h5>
                          <p className='poppinprofile'>{currentUser.adminname}</p>
                        </div>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Position</h5>
                          <p className='poppinprofile'>{currentUser.position}</p>
                        </div>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Department</h5>
                          <p className='poppinprofile'>{currentUser.department}</p>
                        </div>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Address</h5>
                          <p className='poppinprofile'>{currentUser.address}</p>
                        </div>
                      </div>
                      <div className='col'>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Phone No</h5>
                          <p className='poppinprofile'>{currentUser.phoneno}</p>
                        </div>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Email</h5>
                          <p className='poppinprofile'>{currentUser.email}</p>
                        </div>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Education</h5>
                          <p className='poppinprofile'>{currentUser.education}</p>
                        </div>
                        <div className='pb-2'>
                          <h5 className='poppinh3profile'>Marital Status</h5>
                          <p className='poppinprofile'>{currentUser.mstatus}</p>
                        </div>
                      </div>
                    </>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProfileSettings;