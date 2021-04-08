import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FoodMenu from '../FoodMenu/FoodMenu';
import Footer from '../Footer/Footer';
import HeaderTop from '../HeaderTop/HeaderTop';


const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <FoodMenu></FoodMenu>
            <AboutUs></AboutUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;