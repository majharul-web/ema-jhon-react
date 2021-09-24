import React from 'react';
import { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });

    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storeCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                storeCart.push(addedProduct)
            }
            setCart(storeCart)
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="type here to search" />
            </div>

            <div className='shop-container'>
                <div className='product-container'>
                    {
                        displayProducts.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='shopping-cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>

    );
};

export default Shop;