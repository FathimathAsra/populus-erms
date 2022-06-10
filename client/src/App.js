import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employeesadmin from './pages/Employees.admin.js'
import Files from './pages/Files'
import ProfileDashboard from './pages/Profile.Dashboard'
import ProfileSettings from './pages/Profile.Settings'
import Work from './pages/Work'
import AddEmployee from './ui.components/addemployee.js';
import AdminLogin from './pages/Login.js';
import AdminRegister from './pages/Register.js';
import SalaryRecords from './pages/SalaryRecords.js';
import AddSalary from './ui.components/addrecord.js';
import Assets from './pages/Assets.js';
import AddAssets from './ui.components/addasset.js';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProfileDashboard />}></Route>
        <Route path='/files' element={<Files />}></Route>
        <Route path='/tasks' element={<Work />}></Route>
        <Route path='/employees' element={<Employeesadmin />}></Route>
        <Route path='/me' element={<ProfileSettings />}></Route>
        <Route path='/addemployee' element={<AddEmployee />}></Route>
        <Route path='/salary' element={<SalaryRecords />}></Route>
        <Route path='/addrecord' element={<AddSalary />}></Route>
        <Route path='/assets' element={<Assets />}></Route>
        <Route path='/addassets' element={<AddAssets />}></Route>
        <Route exact path='/login' element={<AdminLogin />}></Route>
        <Route path='/register' element={<AdminRegister />}></Route>
        
      </Routes>
      
    </Router>
  );
}

export default App;
