import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodMenu.css'
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
const FoodMenu = () => {
  const [toggleState,setToggleState] = useState(1);
  const handleActive =(index) => {
    setToggleState(index)
  }  
  return (
        <section id="foodMenu">
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <span className={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={()=>handleActive(1)} aria-current="page" >Breakfast</span>
  </li>
  <li class="nav-item">
    <span className={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={()=>handleActive(2)} >Lunch</span>
  </li>
  <li class="nav-item">
    <span className={toggleState === 3 ? "nav-link active" : "nav-link"} onClick={()=>handleActive(3)} >Dinner</span>
   </li>
</ul>

    <div>
        <section>
        {toggleState === 1 && <Breakfast></Breakfast>}
        </section>
        {toggleState === 2 && <Lunch></Lunch>}
        {toggleState === 3 && <Dinner></Dinner>}
      </div>
        </section>
    );
};

export default FoodMenu;