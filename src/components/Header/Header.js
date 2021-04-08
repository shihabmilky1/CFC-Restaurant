import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { AllContext } from '../../App';
 
const Header = () => {
  const [ cart , setCart ,loginUser , setLogInUser ] = useContext(AllContext)
    return (
        <>
           <nav className="navbar navbar-expand-lg shadow" id="main-nav">
  <div className="container">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item px-2">
          <Link className="nav-link active" aria-current="page" to="/cart"><FontAwesomeIcon icon={faCartPlus} />{cart.length > 0 && <span> {cart.length}</span>}</Link>
        </li>
   {!loginUser.email &&   <li className="nav-item px-2">
           <Link className="nav-link" to="/login">Login</Link>
        </li>}
        {loginUser.email && <li className="nav-item px-2">
           <Link className="nav-link" onClick={()=> setLogInUser({}) } to="">Logout</Link> 
        </li>}
      </ul>
    </div>
  </div>
</nav>
        </>
    );
};

export default Header;<h1>Header</h1>