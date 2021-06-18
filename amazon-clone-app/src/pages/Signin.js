import React from 'react'
import "./Signin.css"

function Signin() {
    return (
        <div className="signIn">
            <img src="https://clone-74fb5.web.app/" alt="" />
        <form className="signIn__form">
            <h1>Sign In</h1>
            <label for="Email">Email</label><br />
            <input type="email" id="Email" name="Email" /><br />
            <label for="Password">Password</label><br />
            <input type="password" id="Password" name="Password" />
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button type="submit">Create your Amazon account</button>
        </form>

        </div>
    )
}

export default Signin
