import React from 'react'

function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label>Email:</label>
                <input type="text"/>
                <br/>
                <br/>
                <label>Password:</label>
                <input type="text"/>
                <br/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>

    );
}

export default SignUp