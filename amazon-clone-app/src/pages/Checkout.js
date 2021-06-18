import React from 'react'
import "./Checkout"
import { useStateValue } from "../StateProvider"

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg" alt="amazon-ad" />
            {
                basket?.length===0 ? (<div> <p>Your Amazon Basket is empty.</p> <small>Shop today’s deals</small></div>) : (<div>List of items</div>)
            }
        </div>
    )
}

export default Checkout
