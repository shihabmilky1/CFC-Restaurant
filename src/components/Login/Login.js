import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { AllContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
 }else {
    firebase.app(); // if already initialized, use that one
 }
const Login = () => {
    const [ cart , setCart ,loginUser , setLogInUser] =  useContext(AllContext)
    const [user,setUser] = useState({
        name:'',
        image:'',
        email:'',
    }) ;
   
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var {displayName,email,photoURL} = result.user;
    const newUser = {...user};
    newUser.name =displayName;
    newUser.email = email;
    newUser.image = photoURL;
    setLogInUser(newUser);
    history.replace(from);
}).catch((error) => {
    var errorMessage = error.message;

  });
    }
    return (
        <>
        <div className="text-center mt-5 pt-5">
            <button style={{borderRadius:'0'}} onClick={handleGoogleSingIn} style={{margin:'0 auto'}} className="btn btn-outline-dark"> Continue With Google</button>
        </div>
        </>
    );
};

export default Login;