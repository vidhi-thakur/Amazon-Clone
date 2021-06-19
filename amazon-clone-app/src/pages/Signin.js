import React from 'react'
import "./Signin.css"
import {Link} from "react-router-dom"

function Signin() {
    return (
        <div className="signIn">
            <Link to="/">
                <img className="signIn__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="signIn__container">
                <form className="signIn__form">
                    <h1 className="form--heading">Sign In</h1>
                    <h5 className="form--subheading">Email</h5>
                    <input className="form--input form--btnSize ip--padding" type="email" required />
                    <h5 className="form--subheading">Password</h5>
                    <input className="form--input form--btnSize ip--padding" type="password" required />
                    <button className="product__button form--btnSize ip--padding" type="submit">Sign In</button>
                </form>
                <small className="signIn__para form--btnSize">By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
                <button className="form--btnSize ip--padding btn--style">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Signin
