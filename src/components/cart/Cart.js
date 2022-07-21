import React from 'react';
import {Link} from "react-router-dom"

const Cart = ({cart}) => {
    console.log(cart)
    const total=cart.reduce((previous, product)=>previous+product.price, 0)
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.15;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length} </h5>
            <br />
            <p>Total: {total.toFixed(2)} </p>
            <p>Shipping: {shipping} </p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)} </p>
            <Link to='/checkout'>
            <button className='btn-regular'>review order</button>
            </Link>
        </div>
    );
};

export default Cart;