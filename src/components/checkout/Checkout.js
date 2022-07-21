import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get} from "firebase/database";
import { app } from '../../firebase/firebase';
import "./Checkout.css";


const Checkout = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
    get(child(dbRef, "order"))
    .then((snapshot) => {
        const value = snapshot.val()
        if (value) {
            setProducts(value.array)
        }
    })
    .catch((error) => {
    console.error(error)
    })
    },[]);
    if (products.length===0) {
        return<p className='no-order'>You have no order</p>
    }
    const handleCancel=(id)=>{
        console.log(id)
    }
    return (
            <div className='checkout-container'>
            {
            products.map(product => 
                <div key={products.indexOf(product)} className="product">
                <div>
                    <img src={product?.img} alt="" />
                </div>
                <div>
                    <h4 className="product-name">{product?.name}</h4>
                    <p><small>by: {product?.seller}</small></p>
                    <p>Price: {product?.price}</p>
                    <p><small>only {product?.stock} left in stock - order soon</small></p>
                    <br />
                    <button onClick={()=>handleCancel(product.key)} className="btn-regular"
                    >Cancel Order</button>
                    <button className="btn-regular"
                    >Make Payment</button>
                </div>
            </div>)
            }
        </div>
    );
};

export default Checkout;