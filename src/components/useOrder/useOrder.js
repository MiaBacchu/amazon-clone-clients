import { child, get, getDatabase, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/Context";
import { app } from "../../firebase/firebase";

export const useOrder = () =>{
    const {length} = useContext(UserContext);
    const [order,setOrder] = useState([]);
    console.log(order.length)
    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
    get(child(dbRef, "order"))
    .then((snapshot) => {
        const value = snapshot.val();
        if (!value) {
           return 
        }
        else {
            setOrder(value.array);
            const checked = value.array.filter( od => {return od});
            setOrder(checked);
        }
    })
    .catch((error) => {
    console.error(error)
    })
    },[length]);

    return(
        {
        order
        }
    )
}