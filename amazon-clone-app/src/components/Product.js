import React from 'react'
import "./Product.css"
import {useStateValue} from "../StateProvider"

function Product({id, title, price, rating, image}) {

    const [, dispatch] = useStateValue();

    const addItemToBasket = () => {
        dispatch({
            type: "ADD_ITEM_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <small>₹</small>
                <strong>{price}</strong>
                <div className="product__rating">
                {
                    Array(rating).fill().map(() => <p>⭐</p>
                    )
                }
                </div>
            </div>
            <img src={image} alt="**PRODUCT**" />
            <button onClick={addItemToBasket} className="product__button">Add to Basket</button>
            
        </div>
    )
}

export default Product
