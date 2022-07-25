import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, child, get, set, push} from "firebase/database";
import { app } from '../firebase/firebase';
import Product from './product/Product';
import Cart from './cart/Cart';
import { useOrder } from './useOrder/useOrder';
import { UserContext } from '../context/Context';

const Home = () => {
    const {order} = useOrder();
    const {length,setLength} = useContext(UserContext);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setLength(order.length);
      },[order.length]);

    function writeUserData(props) {
        const db = getDatabase(app);
        const id = push(child(ref(db), 'order')).key;
        set(ref(db, 'order/' + id), {
          ...props,id
        });
        setLength(length+1);
      }

    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
get(child(dbRef, "products"))
.then((snapshot) => {
    setProducts(snapshot.val());
})
.catch((error) => {
  console.error(error)
})
},[]);
const handleAddToCart=(props)=>{
    writeUserData(props);
};
    return (    
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
                <Cart order={order}>
                </Cart>
            </div>
        </div>
    );
};

export default Home;