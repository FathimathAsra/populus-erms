import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import { Link } from 'react-router-dom';


class AddSalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: '',
            salary: '',
            month: '',
            status: '',
            remarks: '',
        }
    }

    // When value changes of the fields
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    refreshPage() {
        window.location.reload(false);
    }




    // To add new salary record when user submits the form
    handleSubmit = (event) => {
        event.preventDefault();
        const { employee, salary, month, status, remarks } = this.state;
        axios.post('http://localhost:5000/salary/salary/addSalary', {
            employee: employee,
            salary: salary,
            month: month,
            status: status,
            remarks: remarks,

        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });

        this.refreshPage()
    }

    render() {
        return (
            <div className="row bgm vh-100">
                <SideMenu />
                <div className="col-md-10" style={{ paddingLeft: 50, paddingRight: 50 }}>
                    <TimeBar />
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h1 className="poppinh1">Create New Salary Record</h1>
                        </div>
                        <div className="row mt-4 pt-2">
                            <div className="col">
                                <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
                                    <div className="row px-5">
                                        <div className='container px-4 align-items-center'>
                                            <h3 className='poppinh3 mb-5'>Add New Salary Record</h3>
                                            <form className="row needs-validation" onSubmit={this.handleSubmit}>
                                                <div className='row mb-4'>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeName" className="form-label">Employee Name
                                                            <input name="employee" type="text" value={this.state.employee} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeName" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeAddress" className="form-label">Salary
                                                            <input name="salary" type="text" value={this.state.salary} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeAddress" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeePhone" className="form-label">Month
                                                            <input name="month" type="text" value={this.state.month} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeePhone" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4 mt-3">
                                                        <label htmlFor="EmployeePosition" className="form-label">Status
                                                            <input name="status" type="text" value={this.state.status} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeePosition" required />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className='row mt-5'>
                                                    <div className="col">
                                                        <label htmlFor="EmployeeDept" className="form-label">Remarks
                                                            <textarea name="remarks" class="form-control text-secondary fw-light" value={this.state.remarks} onChange={this.handleChange} aria-label="Add your remarks" style={{ width: 800 }}></textarea>
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
                                                            <Link to="/salary" className="btn btn-inactive-outline px-4" style={{ borderRadius: "100px" }}>Back</Link>
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

export default AddSalary;