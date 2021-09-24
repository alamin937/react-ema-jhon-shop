import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img, name, price, seller, stock} = props.product
    return (
        <div className='product-area'>
            <img src={img} alt="" />
           <div>
                <h3>{name}</h3>
                <p>{seller}</p>
                <p>Price:${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <Rating></Rating>
                <br />
                <button onClick={() =>props.handleButton(props.product)}>Add to cart</button>
           </div>
        </div>
    );
};

export default Product;