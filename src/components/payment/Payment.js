import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useOrder } from '../../hooks/useOrder';
import './Payment.css'

const Payment = () => {
    const [products,setProducts] = useState([]);
    const {id} = useParams();
    const {order} = useOrder();
    useEffect(()=>{
       setProducts(order.filter(od=>od.id===id));
    },[order])
    return (
        <div className='checkout-container'>
            {
            products.map(product =>
                <div key={product.id}className="product">
                <div>
                    <img src={product?.img} alt="" />
                </div>
                <div>
                    <h4 className="product-name">{product?.name}</h4>
                    <p><small>by: {product?.seller}</small></p>
                    <p>Price: {product?.price}</p>
                    <p><small>only {product?.stock} left in stock - order soon</small></p>
                    <br />
                    <button className="btn-regular"
                    >Confirm Order</button>
                </div>
            </div>)
            }
        </div>
    );
};

export default Payment;