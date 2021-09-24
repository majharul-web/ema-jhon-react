import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { img, name, price, seller, stock, star } = props.product;
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
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rat-icon-color"
                    fullSymbol="fas fa-star rat-icon-color "
                    readonly>
                </Rating>
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="regular-button">{element} add to cart</button>

            </div>
        </div>
    );
};

export default Product;