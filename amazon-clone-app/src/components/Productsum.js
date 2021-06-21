import React from 'react'
import "./Productsum.css"
import { useStateValue } from "../StateProvider"
import { basketItemSum } from "../reducer"
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

function Productsum() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="productsum">
            <CurrencyFormat renderText={(value) => (
                <>
                    <div className="productsum__price">
                        <p> Subtotal ({basket.length} items): <strong>{value}</strong> </p>
                        <div className="productsum__input">
                            <input type="checkbox" />
                            <label>This order contains a gift</label>
                        </div>
                    </div>
                </>
            )} decimalScale={2} value={basketItemSum(basket)} displayType='text' prefix={'₹'} thousandSeparator={true}  />
            
            <Link to="/payment">
                <button className="btn--width product__button">Proceed to Checkout</button>
            </Link>
        </div>
    )
}

export default Productsum
