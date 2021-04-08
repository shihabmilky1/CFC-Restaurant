import React, { useEffect, useState } from 'react';
import BreakFastFood from './BreakFastFood';

const Breakfast = () => {
    const [breakFast,setBreakFast] = useState([]);
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/breakFast')
        .then(res => res.json())
        .then(data => {
            setBreakFast(data)
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
                {breakFast.map(food => <BreakFastFood key={food._id} food={food}></BreakFastFood>)}
        </div>
        </div>
    );
};

export default Breakfast;