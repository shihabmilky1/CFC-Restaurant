import React from 'react';
import { useHistory } from 'react-router';
import './BreakFastFood.css'
const BreakFastFood = (props) => {
    const {name,image,price,_id} =  props.food;
    const history = useHistory()
    const handleClick = (id) => {
      history.push(`/breakfast/${id}`)
    }
    return (
        <>
            <div className="col-md-4">
                <div onClick={()=>handleClick(_id)} className="card text-left h-100 food-card text-center p-2" style={{border:'none'}}>
                  <img className="card-img-top img-fluid w-75 mx-auto" src={image} alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h4 className="card-text mt-3">${price}</h4>
                  </div>
                </div>
            </div>
        </>
    );
};

export default BreakFastFood;