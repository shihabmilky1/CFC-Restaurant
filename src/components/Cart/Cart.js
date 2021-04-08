import React, { useContext } from 'react';
import { AllContext } from '../../App';
// import { AllContext } from '../../App';
import Footer from '../Footer/Footer';
import CartList from './CartList';

const Cart = () => {
    const [cart , setCart ,loginUser , setLogInUser] = useContext(AllContext)
    return (
        <>
            <div className="container">
                <div className="row my-5">
                { !cart.length && <div className="text-center py-5 my-5">
        <div className="spinner-grow text-info my-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
          </div>}
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        {cart.map(food => <CartList key={food._id} food={food}></CartList>)}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cart;