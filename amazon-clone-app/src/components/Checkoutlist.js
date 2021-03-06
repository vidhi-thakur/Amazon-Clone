import React from 'react'
import "./Checkoutlist.css"
import {useStateValue} from "../StateProvider"

function Checkoutlist({id, title, price, rating, image}) {

    
    const [, dispatch] = useStateValue();

    const removeItemFromBasket = () => {
        dispatch({
            type: "REMOVE_ITEM_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutList">
            <img className="checkoutList__image" src={image} alt="**CHECKOUT_PRODUCT**" />
            <div className="checkoutList__info">
                <p className="checkout__title">{title}</p>
                <div className="checkout__price">
                    <span>₹</span>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating c_mar">
                {
                    Array(rating).fill().map(() => <p>⭐</p>
                    )
                }
                </div>
                <button onClick={removeItemFromBasket} className="product__button btn_size">Remove from Basket</button>
            </div>
        </div>
    )
}

export default Checkoutlist
