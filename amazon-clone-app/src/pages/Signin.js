import React from 'react'
import "./Signin.css"

function Signin() {
    return (
        <div className="signIn">
            <h1>Sign In</h1>
            <strong>Email</strong>
            <input />
            <strong>Password</strong>
            <input />
            <button>Sign In</button>
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button>Create your Amazon account</button>
        </div>
    )
}

export default Signin