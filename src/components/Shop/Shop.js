import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProduct(data);
        })
    },[])

    useEffect(()=>{
            if(products.length){
                const savedCart = getStoredCart();
                const storedCard = [];
                for(const key in savedCart){
                    const addedProduct = products.find(product=> product.key === key);
                    if(addedProduct){
                        const quantity = savedCart[key];
                        addedProduct.quantity=  quantity;
                        storedCard.push(addedProduct)
                    }
                }
                setCart(storedCard);
            }
    },[products])


    useEffect(()=>{
        const savedCart = getStoredCart();
        console.log(savedCart)
    },[])

    const handleButton = product =>{
        const exits = cart.find(pd => pd.key === product.key)
        let newCart = [];
        if(exits){

            const rest = cart.filter(pd => pd.key !== product.key)
            exits.quantity = exits.quantity + 1
            newCart = [...rest, product];
            
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
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
               <Cart cart={cart}>
                   <Link to='/order'>
                       <button className="product-area">Review order</button>
                   </Link>
               </Cart>
           </div>
        </div>
        </div>
    );
};

export default Shop;