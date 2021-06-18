import React from 'react'
import "./Productsum.css"
import { useStateValue } from "../StateProvider"

function Productsum() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            {(basket.length >= 0) && (
                    <div className="checkout__sum">
                        <p>{`Subtotal ( ${basket.length} items): `}<span>₹</span><strong>0</strong></p>
                        <input type="checkbox">This order contains a gift</input>
                        <button>Proceed to Checkout</button>
                    </div>
                )}
        </div>
    )
}

export default Productsum
