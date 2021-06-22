import React, { useState } from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { basketItemSum } from "../reducer"
import CurrencyFormat from 'react-currency-format';

function Payment() {

    const [toggle, setToggle] = useState(false);

    const clicked = () => setToggle(true)

    const [{user, basket, address, name}, dispatch] = useStateValue();

    const enterAddress = (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_DIALOG_OPEN",
            dialog: true
        })
    }
    

    return (
        <div className="payment">
            <div className="payment__header">
                <h1>Order Summary</h1>
            </div>
        {!user? <div className="payment__linkToSignIn">
                <img className="linkToSignIn--image" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
                <Link to="/Signin"><button className="payment__signInButton">Sign in to proceed</button></Link>
            </div>: <div className="payment__userSignedIn payment--flex">
            <div className="payment__userInfo--left">
                <div className="payment__userCredential payment--flex">
                    <span>Deliver to</span>
                    <h3 className="payment__userName">{name}</h3>
                </div>
                <div className="payment__userCredential payment--flex">
                    <span>Delivery Email</span>
                    <h3 className="payment__userEmail">{user.email}</h3>
                </div>
                <div className="payment__userCredential payment--flex">
                    <span>Delivery Address</span>
                    <h3 className="payment__userAddress">{address? address: <button className="payment__signInButton" onClick={enterAddress}>Update address</button>}</h3>
                </div>
                <div className="payment__amount payment--flex">
                    <h3>Order Total</h3>
                    <CurrencyFormat renderText={(value) => (
                    <div className=""><strong>{value}</strong>
                    </div>
                    )} decimalScale={2} value={basketItemSum(basket)} displayType='text' prefix={'₹'} thousandSeparator={true}  />
                </div>
            </div>
            <div className="payment__link--right payment--flex">
                <Link to="/">
                    <button className="payment__signInButton">Continue shopping</button>
                </Link>
                <button onClick={clicked} className="payment__signInButton">{!toggle?"Pay Now": "Processing"}</button>
            </div> 
        </div>}
        </div>
    )
}

export default Payment
