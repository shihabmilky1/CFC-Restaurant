import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import { AllContext } from '../../App';
import Footer from '../Footer/Footer';
const DinnerDetail = () => {
    const {id} = useParams();
    const [cart , setCart] = useContext(AllContext)
    const [dinner,setDinner] = useState([]);
    const [quantity,setQuantity] = useState(1)
    useEffect(()=>{
        fetch(`http://localhost:5000/dinner/${id}`)
        .then(res => res.json())
        .then(data => setDinner(data))
    },[])
    const addCarts = {food:dinner,quantity} 
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
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2>{dinner.name}</h2>
                        <br/>
                        <p>{dinner.description}</p>
                        <div className="d-flex align-items-center">
                        <h2>$ {dinner.price}</h2>
                        <div>
                        <button onClick={()=> setQuantity(quantity + 1)} className="ms-5 me-1 btn">+</button>
                        <span className="mb-1">{ quantity}</span>
                        <button onClick={()=> quantity > 1 && setQuantity(quantity - 1)} className="btn ms-1">-</button>
                        </div>
                        </div>
                        <button onClick={()=>handleCart(dinner)} className="btn btn-cart"><FontAwesomeIcon className="me-2" icon={faCartPlus} />Add</button>
                    </div>
                    <div className="col-md-6">
                        <img src={dinner.image} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DinnerDetail;