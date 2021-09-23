import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const totalReduce = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReduce, 0);
    const shipping = 15;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;



    /* 
    let Total = 0;
    for (const product of cart) {
        Total = Total + product.price
    } */
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Item Order:{cart.length}</h5>
            <h4>Total:${total.toFixed(2)}</h4>
            <h4>Shipping:${shipping * cart.length}</h4>
            <h4>Tax:${tax.toFixed(2)}</h4>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;