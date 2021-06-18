import React from 'react'
import "./Checkout.css"
import { useStateValue } from "../StateProvider"
import { Link } from "react-router-dom"
import Checkoutlist from '../components/Checkoutlist'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout bg-white">
            <img className="checkout__image" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon-ad" />
            {
                basket?.length===0 ? (<div className="checkout__paragraph"> <strong>Your Amazon Basket is empty.</strong> 
                <Link className="checkout__link" to="/">
                    Shop today’s deals
                </Link>
                </div>) : (<div className="checkout__paragraph"> <strong className="checkout__border">Your Shopping Basket</strong>
                {
                    basket.map((item) => (<Checkoutlist id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />))
                }
                </div>)
            }
        </div>
    )
}

export default Checkout