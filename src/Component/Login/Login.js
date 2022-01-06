import React from 'react';
import './Login.css';
import useFirebase from './../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUsingGoogle,logOut,user}=useFirebase();
    return (
        <div className="login-container">
           <h4 className="text-center mt-5">{ user.email ? `Thank You ${user.displayName} ` :"please Log In"}</h4>
           {
               user.email?
               <Link to="/home"> <button className="button" onClick={logOut}>LogOut</button></Link>:
               <button className="button" onClick={signInUsingGoogle}>Using GoogleSignIn</button>
           
           }
          
           <Link to="/register"> <p className="mt-5 text-center">register?</p></Link>
          
        </div>
    );
};

export default Login;