import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';
import './LogIn.css'

const LogIn = () => {
    const {googleSignIn} = UseAuth();
    return (
        <div className='login-form'>
            <div>
               <form onSubmit="">
                 <input type="email" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="button" value="Log In" />
               </form>
               <p>New User? <Link to='/register'>Register</Link></p>
               <br />
               <button onClick={googleSignIn}>Google Sign In</button>

            </div>
        </div>
    );
};

export default LogIn;