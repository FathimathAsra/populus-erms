import React from 'react';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import Button from '../ui.components/Buttons';
import ListEmployees from '../ui.components/ListEmployees';

function Employeesadmin() {
 
  return (
    <div className="row bgm vh-100">
      <SideMenu />
      <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, }}>
        <TimeBar />
        <div className="row mt-5">
          <div className="col-md-10">
            <h1 className="poppinh1">Employees List</h1>
          </div>
          <div className="col-md-2" style={{ padding: 0, textAlign: "center" }}>
            <Button />
          </div>
        </div>
        <div className="row mt-4 pt-2">
          <div className="col">
            <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
              <div className="row px-2 overflow-auto" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
                <ol className="list-group list-group-numbered px-5">
                  <ListEmployees />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employeesadmin;