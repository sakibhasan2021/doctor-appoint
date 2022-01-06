import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import useFirebase from './../../hooks/useFirebase';

const Register = () => {
  const{user,email,password,signInUsingEmail} =  useFirebase();
    return (
        <div className="from">
            <from>
                 <h2>Please Register</h2>
            <form>
                <input type="email" name="" required id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <Link to='/appointList'><input onSubmit={signInUsingEmail} type="submit" value="Submit" /></Link>
                
            </form>
            <Link to="/login">Already Register?</Link>
            </from>
        </div>
    );
};

export default Register;