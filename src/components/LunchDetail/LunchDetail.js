import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { AllContext } from '../../App';
const LunchDetail = () => {
    const [cart,setCart] = useContext(AllContext)
    const [lunchFood,setLunchFood] = useState([])
    const [quantity,setQuantity] = useState(1)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/lunch/${id}`)
        .then(res => res.json())
        .then(data => setLunchFood(data));
     
    },[])
    const addCarts = {food:lunchFood,quantity} 
    const handleCart = (product) => {
        fetch('http://localhost:5000/addCart',{
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(addCarts)  //{cart: [...cart,product]}
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <>
             <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2>{lunchFood.name}</h2>
                        <br/>
                        <p>{lunchFood.description}</p>
                        <div className="d-flex align-items-center">
                        <h2>$ {lunchFood.price}</h2>
                        <div>
                        <button onClick={()=> setQuantity(quantity + 1)} className="ms-5 me-1 btn">+</button>
                        <span className="mb-1">{ quantity}</span>
                        <button onClick={()=> quantity > 1 && setQuantity(quantity - 1)} className="btn ms-1">-</button>
                        </div>
                        </div>
                        <button onClick={()=>handleCart(lunchFood)} className="btn btn-cart"><FontAwesomeIcon className="me-2" icon={faCartPlus} />Add</button>
                      
                    </div>
                    
                    <div className="col-md-6">
                        <img src={lunchFood.image} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LunchDetail;