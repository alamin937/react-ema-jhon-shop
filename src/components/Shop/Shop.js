import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProduct(data);
        })
    },[])


    useEffect(()=>{
        const savedCart = getStoredCart();
        console.log(savedCart)
    },[])

    const handleButton = product =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }

    const change = event =>{
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchedProduct)
    }
    return (
        <div>
            <div className='search-area'>
                <input type="text" onChange={change} placeholder='search product' />
            </div>
            <div className='all-area'>
           <div className='product-show'>
               {
                   displayProduct.map(product => <Product product={product} handleButton={handleButton}> </Product>)
               }
           </div>
           <div className='order'>
               <Cart cart={cart}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Shop;