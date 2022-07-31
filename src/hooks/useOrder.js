import { child, get, getDatabase, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Context";
import { app } from "../firebase/firebase";
import useAuth from "./useAuth";

export const useOrder = () =>{
    const {loggedInUser} = useAuth();
    const {length} = useContext(UserContext);
    const [order,setOrder] = useState([]);
    useEffect(()=>{
        const dbRef = ref(getDatabase(app));
    get(child(dbRef, "order"))
    .then((snapshot) => {
        const value = snapshot.val();
        if (!value) {
            setOrder([])
           return 
        }
        else {
            setOrder(value);
            const values = Object.values(value);
            const checked = values.filter( od => od.email===loggedInUser?.email);
            setOrder(checked);
        }
    })
    .catch((error) => {
    console.error(error)
    })
    },[length,loggedInUser]);

    return(
        {
        order
        }
    )
}