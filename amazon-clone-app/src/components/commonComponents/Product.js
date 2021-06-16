import React from 'react'
import "./Product.css"

function Product({title, price, rating, image}) {
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
            <button className="product__button">Add to Basket</button>
            
        </div>
    )
}

export default Product
