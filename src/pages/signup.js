import React from 'react'
import { Link } from 'react-router-dom'
import ComposeMusic from '../images/composemusic.svg'

function SignUp() {
    return (
        <div className="login-signup-wrapper">
            <div>
                <img className="compose-music-img" src={ComposeMusic} alt="Person composing music"/>
                <h1 className="login-signup-txt">Sign Up</h1>
                <input type="text" placeholder="Email Address" className=""/>
                <br/>
                <br/>
                <input type="text" placeholder="Password"/>
                <br/>
                <br/>
                <input type="submit" value="Sign Up" className="account-btn"/>
                <h2 className="login-signup-link">Have an account? <Link to="/login">Login!</Link></h2>
            </div>
            
        </div>

    );
}

export default SignUp