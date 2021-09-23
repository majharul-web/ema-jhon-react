import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { img, name, price, seller, stock } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <p className="product-title">{name}</p>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="regular-button">{element} add to cart</button>

            </div>
        </div>
    );
};

export default Product;