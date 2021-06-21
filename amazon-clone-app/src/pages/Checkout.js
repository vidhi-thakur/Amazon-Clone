import React from 'react'
import "./Checkout.css"
import { useStateValue } from "../StateProvider"
import { Link } from "react-router-dom"
import Checkoutlist from '../components/Checkoutlist'
import Productsum from "../components/Productsum"

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout bg-white">
            <div className="checkout__left">
                <img className="checkout__image" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon-ad" />
                {
                    basket?.length===0 ? (<div className="checkout__paragraph"> <strong>Your Amazon Basket is empty.</strong>
                    <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more. Continue shopping on the</p> 
                    <Link className="checkout__link" to="/">
                    Amazon homepage
                    </Link><span>.</span>
                    </div>) : (<div className="checkout__paragraph"> <strong className="checkout__border">Your Shopping Basket</strong>
                    {
                    basket.map((item) => (<Checkoutlist id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />))
                    }
                </div>)
                }
            </div>
            <div className="checkout__right">
                {basket.length > 0 && <Productsum />}
            </div>
        </div>
    )
}

export default Checkout