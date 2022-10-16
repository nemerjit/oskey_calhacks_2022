import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <h1>Log In</h1>
            <form>
                <label>Email:</label>
                <input type="text" />
                <br/>
                <br/>
                <label>Password:</label>
                <input type="text" />
                <br/>
                <br/>
                <input type="submit" value="Login"/>
            </form>
            <h2>Don't have an account? <Link to="/signup">Sign Up!</Link></h2>
        </div>


    );
}

export default Login