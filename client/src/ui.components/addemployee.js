import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import { Link } from 'react-router-dom';


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            phoneno: '',
            department: '',
            address: '',
            email: '',
            education: '',
            mstatus: '',
            salary: '',
        }
    }


    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To add new employee when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, position, phoneno, department, address, email, education, mstatus, salary } = this.state;
        axios.post('http://localhost:5000/employees/addEmployee', {
            name: name,
            position: position,
            phoneno: phoneno,
            department: department,
            address: address,
            email: email,
            education: education,
            mstatus: mstatus,
            salary: salary,

        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }







    render() {
        return (
            <div className="row bgm vh-100">
                <SideMenu />
                <div className="col-md-10" style={{ paddingLeft: 50, paddingRight: 50 }}>
                    <TimeBar />
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h1 className="poppinh1">Create New Employee</h1>
                        </div>
                        <div className="row mt-4 pt-2">
                            <div className="col">
                                <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
                                    <div className="row px-5">
                                        <div className='container px-4 align-items-center'>
                                            <h3 className='poppinh3 mb-5'>Add New Employee</h3>
                                            <form className="row needs-validation" onSubmit={this.handleSubmit}>
                                                <div className='row mb-4'>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeName" className="form-label">Full name
                                                            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeName" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeAddress" className="form-label">Addess
                                                            <input name="address" type="text" value={this.state.address} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeAddress" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeePhone" className="form-label">Phone No.:
                                                            <input name="phoneno" type="text" value={this.state.phoneno} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeePhone" required />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='row mb-4'>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeePosition" className="form-label">Position
                                                            <input name="position" type="text" value={this.state.position} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeePosition" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeDept" className="form-label">Department
                                                            <input name="department" type="text" value={this.state.department} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeDept" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeEducation" className="form-label">Education
                                                            <input name="education" type="text" value={this.state.education} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeEducation" required />
                                                        </label>
                                                    </div>
                                                </div>


                                                <div className='row mb-4'>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeMStatus" className="form-label">Marital Status
                                                            <input name="mstatus" type="text" value={this.state.mstatus} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeMStatus" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeEmail" className="form-label">Email
                                                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeEmail" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeSalary" className="form-label">Salary
                                                            <input name="salary" type="text" value={this.state.salary} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeEmail" required />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className='container d-flex flex-row-reverse'>
                                                        <input
                                                            type="submit"
                                                            value="submit"
                                                            className="btn btn-inactive px-4"
                                                        />
                                                        <div className='container d-flex flex-row-reverse'>
                                                            <Link to="/employees" className="btn btn-inactive-outline px-4" style={{borderRadius: "100px"}}>Back</Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEmployee;