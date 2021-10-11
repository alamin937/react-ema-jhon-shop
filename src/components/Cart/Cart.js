import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    const reducer = (previous, current) => previous + current.price;
    const total = cart.reduce(reducer,0)

    const shipping = total > 0 ? 30 : 0 ;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + tax + shipping;
    
    return (
        <div>
             <h3>Order Summery</h3>
             <h4>Item order: {props.cart.length}</h4>
             <p>Items Price:{total.toFixed(2)}</p>
             <p>Shipping: {shipping}</p>
             <p>Tax: {tax}</p>
             <p>Grand Total: {grandTotal}</p>
             {props.children}
        </div>
    );
};

export default Cart;