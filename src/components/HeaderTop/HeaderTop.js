import React from 'react';
import './HeaderTop.css'
const HeaderTop = () => {
    return (
        <div>
            <section id="headerTop" className="d-flex align-items-center">
            <div className="container">
            <h1 className="text-center text-white">Best Food Waiting for your Belly</h1>
            <div className="row">
                <div className="col-md-6 my-5 mx-auto">
                    <div className="search-box">
                        <input type="text" className="form-control" placeholder="Search food items"/>
                        <button className="btn search-button" >Search</button>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </div>
    );
};

export default HeaderTop;