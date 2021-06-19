import React from 'react'
import "./Productsum.css"
import { useStateValue } from "../StateProvider"

function Productsum() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="productsum">
            {(basket.length >= 0) && (
                    <div className="productsum__price">
                        <p>{`Subtotal ( ${basket.length} items): `}<span>₹</span><strong>0</strong></p>
                        <div className="productsum__input">
                            <input type="checkbox" value="This order contains a gift" />
                            <label>This order contains a gift</label>
                        </div>
                        <button className="btn--width product__button">Proceed to Checkout</button>
                    </div>
                )}
        </div>
    )
}

export default Productsum
