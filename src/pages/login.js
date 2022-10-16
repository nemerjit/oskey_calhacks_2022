import React from 'react';
import { Link } from 'react-router-dom'
import ComposeMusic from '../images/composemusic.svg'

function Login() {
    return (
        <div className="login-signup-wrapper">
            <div>
                <img className="compose-music-img" src={ComposeMusic} alt="Person composing music"/>
                <h1 className='login-signup-txt'>Login</h1>
                <input type="text" placeholder="Email Address" />
                <br/>
                <br/>
                <input type="text" placeholder="Password"/>
                <br/>
                <br/>
                <input type="submit" value="Login" className="account-btn"/>
                <h2 className="login-signup-link">Don't have an account? <Link to="/signup">Sign Up!</Link></h2>
        
            </div>
        </div>


    );
}

export default Login

