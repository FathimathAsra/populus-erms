import React from 'react';
import FilesList from '../ui.components/FileList';
import FileUploadForm from '../ui.components/FileUploadForm';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';

function Files() {
  return (
    <div className="row bgm vh-100 d-flex flex-wrap">
      <SideMenu />
      <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50,}}>
        <TimeBar />
        <div className="row mt-5">
          <div className="col-md-11">
            <h1 className="poppinh1">File Storage</h1>
          </div>
        </div>
        <div className="row mt-4 pt-2">
          <div className="col">
            <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
              <div className="row px-5">
                <FileUploadForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pt-2">
          <div className="col">
            <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
              <FilesList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Files;