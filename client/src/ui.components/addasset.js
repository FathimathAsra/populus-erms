import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history"
const history = createBrowserHistory({forceRefresh:true});


class AddAssets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            admin: '',
            location: '',
            value: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    refreshPage() {
        window.location.reload(false);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, admin, location, value } = this.state;
        axios.post('http://localhost:5000/assets/assets/addAssets', {
            name: name,
            admin: admin,
            location: location,
            value: value

        })
            .then((response) => {
                console.log(response);
                history.push('/assets');
                document.location.reload()
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
                            <h1 className="poppinh1">Create New Asset Record</h1>
                        </div>
                        <div className="row mt-4 pt-2">
                            <div className="col">
                                <div className="container-fluid bg-light shadow-sm p-4" style={{ height: 'auto', borderRadius: 6, borderStyle: "none" }}>
                                    <div className="row px-5">
                                        <div className='container px-4 align-items-center'>
                                            <h3 className='poppinh3 mb-5'>Add New Asset Record</h3>
                                            <form className="row needs-validation" onSubmit={this.handleSubmit}>
                                                <div className='row mb-4'>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeName" className="form-label">Asset Name
                                                            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeName" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeeAddress" className="form-label">Administrator
                                                            <input name="admin" type="text" value={this.state.admin} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeeAddress" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="EmployeePhone" className="form-label">Location
                                                            <input name="location" type="text" value={this.state.location} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeePhone" required />
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4 mt-3">
                                                        <label htmlFor="EmployeePosition" className="form-label">Value
                                                            <input name="value" type="text" value={this.state.value} onChange={this.handleChange} className="form-control text-secondary fw-light" id="EmployeePosition" required />
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
                                                            <Link to="/assets" className="btn btn-inactive-outline px-4" style={{ borderRadius: "100px" }}>Back</Link>
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

export default AddAssets;