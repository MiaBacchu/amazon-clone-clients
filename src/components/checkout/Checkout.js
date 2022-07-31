import React, { useContext, useEffect} from 'react';
import { getDatabase, ref, remove} from "firebase/database";
import { app } from '../../firebase/firebase';
import "./Checkout.css";
import { UserContext } from '../../context/Context';
import { useOrder } from '../../hooks/useOrder';
import {Link} from 'react-router-dom'

const Checkout = () => {
    const {order} = useOrder();
    const {setLength}=useContext(UserContext);
    useEffect(()=>{
        setLength(order.length);
      },[order.length]);
    if (order.length===0) {
        return<p className='no-order'>You have no order</p>
    }
    function handleCancel(id) {
        const db = getDatabase(app);
        const cancelRef = ref(db, `order/${id}`);
        remove(cancelRef);
        setLength(order.length-1);
      }
    return (
            <div className='checkout-container'>
            {
            order.map(product => 
                <div key={order.indexOf(product)} className="product">
                <div>
                    <img src={product?.img} alt="" />
                </div>
                <div>
                    <h4 className="product-name">{product?.name}</h4>
                    <p><small>by: {product?.seller}</small></p>
                    <p>Price: {product?.price}</p>
                    <p><small>only {product?.stock} left in stock - order soon</small></p>
                    <br />
                    <button onClick={()=>handleCancel(product.id)} className="btn-regular"
                    >Cancel Order</button>
                    <Link to={`/payment/${product.id}`} className="btn-regular"
                    >Make Payment</Link>
                </div>
            </div>)
            }
        </div>
    );
};

export default Checkout;