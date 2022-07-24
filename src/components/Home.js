import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, child, get, set} from "firebase/database";
import { app } from '../firebase/firebase';
import Product from './product/Product';
import Cart from './cart/Cart';
import { useOrder } from './useOrder/useOrder';
import { UserContext } from '../context/Context';

const Home = () => {
    const {order} = useOrder();
    const {setLength} = useContext(UserContext);

    useEffect(()=>{
        setLength(order.length);
      },[order.length]);

    const [products,setProducts] = useState([]);
    function writeUserData(array) {
        const db = getDatabase(app);
        set(ref(db, 'order'), {
          array
        })
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
const handleAddToCart=(p)=>{
    let array = [...order,p];
    writeUserData(array);
    setLength(array.length)
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