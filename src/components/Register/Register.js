import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='email'/>
                    <br />
                    <input type="password" name="" id="" placeholder='password' />
                    <br />
                    <input type="password" name="" id="" placeholder='re-password' />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already Have Acount? <Link to='/login'>LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;