import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeServices';
import axios from "axios"



class ListEmployees extends Component {

    constructor(props) {
        super(props);
        this.employeeService = new EmployeeService();
        this.state = {
            employees: []
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount = () => {
        this.getEmployeeList();
    }

    getEmployeeList() {
        axios.get('http://localhost:5000/employees')
            .then((response) => {
                console.log(response);
                this.setState({
                    employees: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(empid) {
        this.employeeService.deleteEmployee(empid);
        this.getEmployeeList();
    }

    render() {
        const { employees } = this.state;
        return (

            <div>

                <>
                    <table className='table table-striped horizontal-scroll'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Address</th>
                                <th>Education</th>
                                <th>Marital Status</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees && employees.map((employee, i) => {
                                    return (
                                        <tr  key={i}>
                                            <td className='align-middle'>{i}</td>
                                            <td className='align-middle'>{employee.name}</td>
                                            <td className='align-middle'>{employee.position}</td>
                                            <td className='align-middle'>{employee.email}</td>
                                            <td className='align-middle'>{employee.phoneno}</td>
                                            <td className='align-middle'>{employee.department}</td>
                                            <td className='align-middle'>{employee.address}</td>
                                            <td className='align-middle'>{employee.education}</td>
                                            <td className='align-middle'>{employee.mstatus}</td>
                                            <td className='align-middle'>{employee.salary}</td>
                                            <td>
                                                <button onClick={() => this.deleteEmployee(employee._id)} className="btn btn-outline-danger align-middle" style={{ borderRadius: '100px', padding: '0.20em 1em' }} >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table >
                </>



            </div>

        );
    }
}

export default ListEmployees;