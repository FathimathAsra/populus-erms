import React, { Component } from 'react';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import { NavLink } from 'react-router-dom'
import SalaryRecordsService from '../services/SalaryRecordsService.js';
import axios from "axios"

class SalaryRecords extends Component {

    constructor(props) {
        super(props);
        this.salaryService = new SalaryRecordsService();
        this.state = {
            salaryRecord: []
        }
        this.deleteSalary = this.deleteSalary.bind(this);
    }

    componentDidMount = () => {
        this.getSalaryList();
    }

    // To get all the salary records
    getSalaryList() {
        axios.get('http://localhost:5000/salary/salary')
            .then((response) => {
                console.log(response);
                this.setState({
                    salaryRecord: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // To delete any salary records
    deleteSalary(salaryid) {
        this.salaryService.deleteSalary(salaryid);
        this.getSalaryList();
    }

    render() {
        const { salaryRecord } = this.state;
        return (

            <div className="row bgm vh-100">
                <SideMenu />
                <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, }}>
                    <TimeBar />
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h1 className="poppinh1">Salary Records</h1>
                        </div>
                        <div className="col-md-2" style={{ padding: 0, textAlign: "center" }}>
                            <NavLink to="/addrecord">
                                <button type="button" className="btn btn-style px-4 ">Add New Record</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row mt-4 pt-2">
                        <div className="col">
                            <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
                                <div className="row px-2 overflow-auto" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
                                    <ol className="list-group list-group-numbered px-5">
                                        <table className='table table-striped horizontal-scroll'>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Employee Name</th>
                                                    <th>Salary</th>
                                                    <th>Month</th>
                                                    <th>Status</th>
                                                    <th>Remarks</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    salaryRecord && salaryRecord.map((salary, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td>{i}</td>
                                                                <td>{salary.employee}</td>
                                                                <td>{salary.salary}</td>
                                                                <td>{salary.month}</td>
                                                                <td>{salary.status}</td>
                                                                <td>{salary.remarks}</td>
                                                                <td>
                                                                    <button onClick={() => this.deleteSalary(salary._id)} className="btn btn-outline-danger align-middle" style={{ borderRadius: '100px', padding: '0.20em 1em' }} >Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default SalaryRecords;