import React, { useState } from 'react'
import "./Signin.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from '../firebase';
import {useStataValue, useStateValue} from "../StateProvider"

function Signin() {

    const [ , dispatch] = useStateValue();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    let history = useHistory();

    const onClickSignIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((user) => {
            //redirect to login page
            history.push("/");
        }).catch((error) => alert(error.message))

        dispatch({
            type: "SET_NAME",
            name: name
          })

          console.log(name)
    }

    const onClickRegister = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((user) => {
            //redirect to login page
            history.push("/");
        }).catch((error) => alert(error.message))
    }

    return (
        <div className="signIn">
            <Link to="/">
                <img className="signIn__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="signIn__container">
                <form className="signIn__form">
                    <h1 className="form--heading">Sign In</h1>
                    <h5 className="form--subheading">User Name</h5>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="form--input form--btnSize ip--padding" type="text" required />
                    <h5 className="form--subheading">Email</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form--input form--btnSize ip--padding" type="email" required />
                    <h5 className="form--subheading">Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form--input form--btnSize ip--padding" type="password" required />
                    <button onClick={onClickSignIn} className="product__button form--btnSize ip--padding" type="submit">Sign In</button>
                </form>
                <small className="signIn__para form--btnSize">By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
                <button onClick={onClickRegister} className="form--btnSize ip--padding btn--style">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Signin
