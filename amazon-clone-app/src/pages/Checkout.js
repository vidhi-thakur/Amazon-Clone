import React from 'react'
import "./Checkout.css"
import { useStateValue } from "../StateProvider"

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__image" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon-ad" />
            {
                basket?.length===0 ? (<div> <p>Your Amazon Basket is empty.</p> <small>Shop today’s deals</small></div>) : (<div>List of items</div>)
            }
        </div>
    )
}

export default Checkout