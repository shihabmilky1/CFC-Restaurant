import React from 'react';
import { useHistory } from 'react-router';

const DinnerFood = (props) => {
    const {name,image,price,_id} =  props.food;
    const history = useHistory()
    const handleClick = id => {
      history.push(`/dinner/${id}`)
    }
    return (
        <>
            <div className="col-md-4">
                <div onClick={()=>handleClick(_id)} class="card text-left h-100 food-card text-center p-2" style={{border:'none'}}>
                  <img class="card-img-top img-fluid w-75 mx-auto" src={image} alt=""/>
                  <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <h4 class="card-text mt-3">${price}</h4>
                  </div>
                </div>
            </div>
        </>
    );
};

export default DinnerFood;