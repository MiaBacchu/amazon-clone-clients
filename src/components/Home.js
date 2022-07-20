import './Home.css';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get} from "firebase/database";
import { app } from '../firebase/firebase';
import Product from './product/Product';
import Cart from './cart/Cart';
const Home = () => {
    const [products,setProducts]=useState([])
    console.log(products.length)
    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
get(child(dbRef, "products"))
.then((snapshot) => {
    setProducts(snapshot.val())
})
.catch((error) => {
  console.error(error)
})
    },[])
    return (
        <div className='home-container'>
            <div className='product-container'>
            {
            products.map(product => 
             <Product
             key={product.key}
             product={product}
             >
             </Product>)
            }
            </div>
            <div className='cart-container'>
             <Cart>
             </Cart>
            </div>
        </div>
    );
};

export default Home;