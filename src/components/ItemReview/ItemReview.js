import React from 'react';

const ItemReview = (props) => {
    const {name, price, quantity, key} = props.product
    const {handleRemove} = props
    return (
        <div className='product-area'>
            <div>
            <h4>{name}</h4>
            <p>Price : {price}</p>
            <h4>{quantity}</h4>
            <button onClick={()=>handleRemove(key)}>Remove</button>
            {props.children}
            </div>
        </div>
    );
};

export default ItemReview;