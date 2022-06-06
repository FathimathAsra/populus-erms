import SideMenuLogin from '../ui.components/SideNavLogin';
import TimeBar from '../ui.components/TimeBar';
// import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../middleware/AdminAuthSlice.js'
import { toast } from 'react-toastify';


function AdminLogin() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

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

        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
    }

    return (
        <div className="row bgm vh-100">
            <SideMenuLogin />
            <div className="col-md-10 bgm" style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, }}>
                <TimeBar />
                <div className="row mt-5 pt-5">
                    <div className="col mt-5 ">
                        <div className="container-fluid bg-light shadow-sm d-flex justify-content-center pt-5" style={{ height: 550, borderRadius: 6, borderStyle: "none", width: 750 }}>
                            <form style={{ width: 350 }} onSubmit={onSubmit}>
                                <h1 className="poppinh1 pt-5 mt-3 justify-content-center mb-5">Please Login</h1>
                                <div className='mb-4'>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        value={email}
                                        placeholder='Enter your email'
                                        onChange={onChange}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        name='password'
                                        value={password}
                                        placeholder='Enter password'
                                        onChange={onChange}
                                    />
                                </div>
                                <button className="mt-4 px-4 btn btn-style btn-primary justify-content-center" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin