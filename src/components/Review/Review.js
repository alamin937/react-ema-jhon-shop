import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Details/Details';
import useCart from '../../Details/UseCart';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ItemReview from '../ItemReview/ItemReview';


const Review = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart)
        removeFromDb(key)
    }


    const handlePlaceOrder = () =>{
            setCart([])
            clearTheCart();
    }

    return (
        <div className='all-area'>
           <div className='product-show'>
                {
                    cart.map(product => <ItemReview handleRemove={handleRemove} product={product}></ItemReview>)
                }
           </div>
           <div className='order'>
                <Cart cart={cart}>
                   <Link to='/placeorder'> <button className='product-area' onClick={handlePlaceOrder}>Place Order</button></Link>
                </Cart>
           </div>
        </div>
    );
};

export default Review;