import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import BreakFastDetail from './components/BreakfastDetail/BreakFastDetail';
import LunchDetail from './components/LunchDetail/LunchDetail';
import DinnerDetail from './components/DinnerDetail/DinnerDetail';
import { createContext, useEffect, useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
export const AllContext = createContext()
function App() {
  const [loginUser,setLogInUser] = useState({});
  const [cart,setCart] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/loadCart?email=' + loginUser.email)
    .then(res => res.json())
    .then(data => setCart(data))
  }, [cart])
  
  return (
  <AllContext.Provider value={[ cart , setCart ,loginUser , setLogInUser ]}>
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivetRoute path="/breakfast/:id">
          <BreakFastDetail/>
        </PrivetRoute>
        <PrivetRoute path="/lunch/:id">
          <LunchDetail/>
        </PrivetRoute>
        <PrivetRoute path="/dinner/:id">
          <DinnerDetail/>
        </PrivetRoute>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  </AllContext.Provider>
  );
}

export default App;
