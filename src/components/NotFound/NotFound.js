import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            <div>
            <h1>Not Found (404)</h1>
            <Link className="btn" to="/" style={{ background:'#7ac948'}}>Home</Link>
            </div>
        </div>
    );
};

export default NotFound;