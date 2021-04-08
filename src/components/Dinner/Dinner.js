import React, { useEffect, useState } from 'react';
import DinnerFood from './DinnerFood';

const Dinner = () => {
    const [dinner,setDinner] = useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/dinner')
        .then(res => res.json())
        .then(data => {
            setDinner(data)
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
                {dinner.map(food => <DinnerFood key={food._id} food={food}></DinnerFood>)}
        </div>
        </div>
    );
};

export default Dinner;