import React from 'react';
import { NavLink } from 'react-router-dom';

const Error =()=>{
    return(
        <>
        <h1>Welcome to the my world</h1>
        <p>Sorry, this page doesn't exist</p>
        <br/>
        <NavLink to="/">Go bck</NavLink>
        </>
    )
}
export default Error