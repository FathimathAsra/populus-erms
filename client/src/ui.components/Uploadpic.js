import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import { NavLink } from 'react-router-dom';

export default class Uploadpic extends Component {
    ProfileImage = {
        _id: '',
        profilepic: ''
    }

    setProfileImageVal = (data) => {
        this.ProfileImage = {
            _id: data._id,
            profilepic: data.profilepic
        }
    }

    onTaskChange(e) {
        this.ProfileImage = {
            _id: this.ProfileImage._id,
            profilepic: e.target.value
        }

        e = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(e);
    }

    getUsers() {
        const headers = { 'Content-Type': 'application/json' }

        const endpoint = 'http://localhost:5000/api/users/';

        axios.get(endpoint, { headers })
            .then(response => {
                this.setState({
                    ProfileImage: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    onUpdate = () => {
        axios.put('http://localhost:5000/api/users/upload-image/:id' + this.ProfileImage._id, this.ProfileImage)
            .then((res) => {
                console.log('photo updated' + res)
                this.refreshPage()
            }).catch((error) => {
                console.log(error)
            })
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
                                            <h3 className='poppinh3 mb-5'>Change Photo</h3>
                                            <div className="container">
                                                <div className="form-group">
                                                    <label className="mb-2"><strong>Input A Photo URL</strong></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue={this.ProfileImage.profilepic}
                                                        onChange={(e) => { this.onTaskChange(e) }} ref={(input) => this.myinput = input}
                                                        style={{ borderRadius: '100px' }}
                                                    />
                                                </div>

                                                <div className="d-grid mt-3 gap-2">
                                                    <input type="button" onClick={this.onUpdate} value="Update" className="btn btn-inactive px-4 " />
                                                    <NavLink to="/me">
                                                        <button type="button" className="btn btn-inactive px-4" style={{ borderRadius: '100px' }}>Back</button>
                                                    </NavLink>
                                                </div>
                                            </div>
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
}



