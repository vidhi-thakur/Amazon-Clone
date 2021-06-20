import React from 'react'
import "./Signin.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from '../firebase';
import {useStataValue} from "../StateProvider"

function Signin() {

    let history = useHistory();

    const onClickSignIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(auth).then((user) => {
            dispatchEvent({

            })
        })
        //redirect to login page
        history.push("/signin");
    }

    const onClickRegister = (event) => {
        event.preventDefault();
        //redirect to login page
        history.push("/signin");
    }

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
                    <button onClick={onClickSignIn} className="product__button form--btnSize ip--padding" type="submit">Sign In</button>
                </form>
                <small className="signIn__para form--btnSize">By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
                <button onClick={onClickRegister} className="form--btnSize ip--padding btn--style">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Signin
