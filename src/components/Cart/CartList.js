import React, { useEffect, useState } from 'react';

const CartList = (props) => {
    const {name,image,price} = props.food.food;
    const {quantity,_id} = props.food;
    const [quantityIncrease , setQuantityIncrease] = useState(quantity + 1)
    const [quantityDecrease , setQuantityDecrease] = useState(quantity - 1)
    const [q , setQ] = useState(quantity + 0)

    const handleIncrease  = (id) => {
      fetch(`http://localhost:5000/quantityIncrease/${id}`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quantityIncrease})
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    
    const handleDecrease = (id) => {
      fetch(`http://localhost:5000/quantityDecrease/${id}`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quantityDecrease})
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    return (
        <div>
            <div className="card text-left shadow my-2" style={{border:'none'}}>
              <div className="card-body d-flex justify-content-around align-items-center">
              <img className="card-img-top img-fluid w-25" src={image} alt=""/>
                <div>
                <h6 className="card-title">{name}</h6>
                <h6 className="card-title">{price}</h6>
                </div>
                <button className="btn" onClick={()=>{handleIncrease(_id);setQ(q + 1);setQuantityIncrease(quantityIncrease + 1)}} >+</button>
                <span>{q}</span>
                <button className="btn" onClick={()=>{handleDecrease(_id);setQ(q - 1);setQuantityDecrease(quantityDecrease - 1)}} >-</button>
              </div>
            </div>
        </div>
    );
};

export default CartList;