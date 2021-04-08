import React, { useEffect, useState } from 'react';
import LunchFood from './LunchFood';

const Lunch = () => {
    const [lunch,setLunch] = useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/lunch')
        .then(res => res.json())
        .then(data => {
            setLunch(data)
            setLoader(false)
        })
    },[])
    return (
        <div  className="container">
        <div className="row g-4 mt-4">
        { loader && <div className="text-center">
        <div className="spinner-grow text-info my-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
          </div>}
                {lunch.map(food => <LunchFood key={food._id} food={food}></LunchFood>)}
        </div>
        </div>
    );
};

export default Lunch;