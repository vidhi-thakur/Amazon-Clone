import React from 'react'
import "./Productsum.css"
import { useStateValue } from "../StateProvider"
import { basketItemSum } from "../reducer"
import CurrencyFormat from 'react-currency-format';

function Productsum() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="productsum">
            <CurrencyFormat renderText={(value) => (
                <>
                    <div className="productsum__price">
                        <p> Subtotal ({basket.length} items): <strong>{value}</strong> </p>
                        <div className="productsum__input">
                            <input type="checkbox" value="This order contains a gift" />
                            <label>This order contains a gift</label>
                        </div>
                    </div>
                </>
            )} decimalScale={2} value={basketItemSum(basket)} displayType='text' prefix={'₹'} thousandSeparator={true}  />
            
            <button className="btn--width product__button">Proceed to Checkout</button>
        </div>
    )
}

export default Productsum
