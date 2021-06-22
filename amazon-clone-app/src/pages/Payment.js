import React, { useState } from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { basketItemSum } from "../reducer"
import CurrencyFormat from 'react-currency-format';
import Checkoutlist from "../components/Checkoutlist";

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
            <div className="borderBottom">
                <h1>Order Summary</h1>
            </div>
        {!user? <div className="payment__linkToSignIn">
                <img className="linkToSignIn--image" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
                <Link to="/Signin"><button className="payment__signInButton margin">Sign in to proceed</button></Link>
            </div>: <div className="payment__userSignedIn flex">
            <div className="payment__top rowWidth borderBottom flex">
                <h3 className="payment__style small_screen_width">Deliver to</h3>
                <div className="payment__userInfo small_screen_width">
                    {name && <p>{name}</p>}
                    <p>{user.email}</p>
                    <p className="payment__userAddress">{address? address: <button className="payment__btn payment__signInButton" onClick={enterAddress}>Update address</button>}</p>
                </div>
            </div>
            <div className="payment__middle rowWidth borderBottom flex">
                <h3 className="payment__style small_screen_width">Ordered Items</h3>
                {
                    basket?.length===0 ? (<div className="checkout__paragraph small_screen_width"> <strong>Your Amazon Basket is empty.</strong>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more. Continue shopping on the</p> 
                    <Link className="checkout__link" to="/">
                    Amazon homepage
                    </Link><span>.</span>
                    </div>) : (<div className="checkout__paragraph small_screen_width"> 
                    {
                    basket.map((item) => (<Checkoutlist id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />))
                    }
                </div>)
                }
            </div>
            <div className="payment__bottom rowWidth borderBottom flex">
                <h3 className="payment__style small_screen_width">Order Total</h3>
                <div className="payment__amount small_screen_width flex">
                <CurrencyFormat renderText={(value) => (
                <div className="amt--fontColor"><strong>{value}</strong>
                </div>
                )} decimalScale={2} value={basketItemSum(basket)} displayType='text' prefix={'₹'} thousandSeparator={true}  />
                <div className="bottom--btn flex">
                    <Link to="/">
                        <button className="payment__signInButton payment__btn">Continue shopping</button>
                    </Link>
                    <div>
                    <button onClick={clicked} className="payment__signInButton payment__btn">{!toggle?"Pay Now": "Processing"}</button>
                    </div>
                </div>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default Payment