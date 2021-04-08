import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer style={{padding:'40px 0px',background:'#000'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/4YWCBR4/logo.png" className="w-50" alt=""/>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><Link to="/about" >About Online Food</Link></li>
                        <li><Link to="" >Read Our Blog</Link></li>
                        <li><Link to="" >Sign up to deliver</Link></li>
                        <li><Link to="" >Add your restaurant</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><Link to="">Get Help</Link></li>
                        <li><Link to="">Read FAQ</Link></li>
                        <li><Link to="">View All Cities</Link></li>
                        <li><Link to="">Restaurants near me</Link></li>
                    </ul>
                </div>
            </div>
            <div className=" d-flex justify-content-between align-items-center mt-2">
                <small className="text-light">Copyright © 2020 Online Food</small>
                <ul className="d-flex">
                    <li className="px-3"><Link to="">Privacy Policy.</Link></li>
                    <li className="px-3"><Link to="">Terms of Use</Link></li>
                    <li className="px-3"><Link to="">Pricing</Link></li>
                </ul>
            </div>
        </div>
        </footer>
    );
};

export default Footer;