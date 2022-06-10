import React from 'react';
import { NavLink } from 'react-router-dom'


function Button() {

    return (
        <>
            <NavLink to="/addemployee">
                <button type="button" className="btn btn-style px-4 ">Add New Employee</button>
            </NavLink>

        </>

    )

} 


export default Button;
