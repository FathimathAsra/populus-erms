import SideMenuLogin from '../ui.components/SideNavLogin';
import TimeBar from '../ui.components/TimeBar';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../middleware/AdminAuthSlice.js'
import { toast } from 'react-toastify'



function AdminRegister() {


    const [formData, setFormData] = useState({
        adminname: '',
        email: '',
        password: '',
        password2: '',
        position: '',
        phoneno: '',
        department: '',
        address: '',
        education: '',
        mstatus: '',

    })

    const { adminname, email, password, password2, position, phoneno, department, address, education, mstatus, } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                adminname,
                email,
                password,
                position,
                phoneno,
                department,
                address,
                education,
                mstatus,

            }

            dispatch(register(userData))
        }
    }



    return (
        <div className="row bgm vh-100">
            <SideMenuLogin />
            <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, }}>
                <TimeBar />
                <div className="row mt-5 pt-5">
                    <div className="col mt-5 ">
                        <div className="container-fluid bg-light shadow-sm d-flex justify-content-center" style={{ height: 600, borderRadius: 6, borderStyle: "none", width: 950 }}>
                            <form style={{ width: 750 }} onSubmit={onSubmit}>
                                <h1 className="poppinh1 pt-5 justify-content-center mb-5">Register Admin</h1>
                                <div className='row mb-4'>
                                    <div className="col-md-4">
                                        <label className="form-label">Full name
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='adminname'
                                                name='adminname'
                                                value={adminname}
                                                placeholder='Enter your name'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Addess
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='address'
                                                name='address'
                                                value={address}
                                                placeholder='Enter your address'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Phone No.:
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='phoneno'
                                                name='phoneno'
                                                value={phoneno}
                                                placeholder='Enter your Phone No.:'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <div className="col-md-4">
                                        <label className="form-label">Position
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='position'
                                                name='position'
                                                value={position}
                                                placeholder='Enter your Position'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Department
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='department'
                                                name='department'
                                                value={department}
                                                placeholder='Enter your Department'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Education
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='education'
                                                name='education'
                                                value={education}
                                                placeholder='Enter your Education'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                </div>


                                <div className='row mb-4'>
                                    <div className="col-md-4">
                                        <label className="form-label">Marital Status
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='mstatus'
                                                name='mstatus'
                                                value={mstatus}
                                                placeholder='Enter your Marital Status'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Email
                                            <input
                                                type='email'
                                                className='form-control'
                                                id='email'
                                                name='email'
                                                value={email}
                                                placeholder='Enter your email'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Password
                                            <input
                                                type='password'
                                                className='form-control'
                                                id='password'
                                                name='password'
                                                value={password}
                                                placeholder='Enter password'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <div className="col-md-4">
                                        <label className="form-label">Confirm Password
                                            <input
                                                type='password'
                                                className='form-control'
                                                id='password2'
                                                name='password2'
                                                value={password2}
                                                placeholder='Confirm password'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div>
                                    {/* <div className="col-md-4">
                                        <label className="form-label">Upload Profile Pic
                                            <input
                                                type='file'
                                                className='form-control'
                                                id='password2'
                                                name='password2'
                                                value={password2}
                                                placeholder='Confirm password'
                                                onChange={onChange}
                                            />
                                        </label>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className='container d-flex flex-row-reverse'>
                                        <input
                                            type="submit"
                                            // value="submit"
                                            className="btn btn-inactive px-4"
                                        />
                                        <div className='container d-flex flex-row-reverse'>
                                            <Link to="/login" className="btn btn-inactive-outline px-4" style={{ borderRadius: "100px" }}>Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister