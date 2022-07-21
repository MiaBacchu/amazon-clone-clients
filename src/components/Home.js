import './Home.css';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get, set} from "firebase/database";
import { app } from '../firebase/firebase';
import Product from './product/Product';
import Cart from './cart/Cart';
import Context from '../context/Context';
import Header from '../Header';

const Home = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    function writeUserData(array) {
        console.log(array)
        const db = getDatabase(app);
        set(ref(db, 'order'), {
          array
        })
      }

    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
    get(child(dbRef, "order"))
    .then((snapshot) => {
        const value = snapshot.val()
        if (value) {
            setCart(value.array)
        }
    })
    .catch((error) => {
    console.error(error)
    })
    },[]);

    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
get(child(dbRef, "products"))
.then((snapshot) => {
    setProducts(snapshot.val())
})
.catch((error) => {
  console.error(error)
})
},[]);
const handleAddToCart=(p)=>{
    const array=[...cart,p]
    setCart(array)
    writeUserData(array)};
    return (
        <Context cart={cart}>
            <Header></Header>
        <div className='home-container'>
            <div className='product-container'>
            {
            products.map(product => 
             <Product
             key={product.key}
             product={product}
             handleAddToCart={()=>handleAddToCart(product)}
             >
             </Product>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                </Cart>
            </div>
        </div>
        </Context>
    );
};

export default Home;