import React, { Component } from 'react';
import SideMenu from '../ui.components/SideNav.Menu';
import TimeBar from '../ui.components/TimeBar';
import { NavLink } from 'react-router-dom'
import AssetsService from '../services/AssetsService.js';
import axios from "axios"

class AssetsRecords extends Component {

    constructor(props) {
        super(props);
        this.assetsService = new AssetsService();
        this.state = {
            assetsRecord: []
        }
        this.deleteAsset = this.deleteAsset.bind(this);
    }

    componentDidMount = () => {
        this.getAssetsList();
    }

    // To get all the assets records
    getAssetsList() {
        axios.get('http://localhost:5000/assets/assets')
            .then((response) => {
                console.log(response);
                this.setState({
                    assetsRecord: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // To delete any salary records
    deleteAsset(assetid) {
        this.assetsService.deleteAsset(assetid);
        this.getAssetsList();
    }

    render() {
        const { assetsRecord } = this.state;
        return (

            <div className="row bgm vh-100">
                <SideMenu />
                <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, }}>
                    <TimeBar />
                    <div className="row mt-5">
                        <div className="col-md-10">
                            <h1 className="poppinh1">Assets Records</h1>
                        </div>
                        <div className="col-md-2" style={{ padding: 0, textAlign: "center" }}>
                            <NavLink to="/addassets">
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
                                                    <th>Asset Name</th>
                                                    <th>Administrator</th>
                                                    <th>Location</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    assetsRecord && assetsRecord.map((asset, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td>{i}</td>
                                                                <td>{asset.name}</td>
                                                                <td>{asset.admin}</td>
                                                                <td>{asset.location}</td>
                                                                <td>{asset.value}</td>
                                                                <td>
                                                                    <button onClick={() => this.deleteAsset(asset._id)} className="btn btn-outline-danger align-middle" style={{ borderRadius: '100px', padding: '0.20em 1em' }} >Delete</button>
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


export default AssetsRecords;