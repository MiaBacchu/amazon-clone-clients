import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebase/firebase";

const auth = getAuth(app);

const useAuth = () => {

    const [loggedInUser,setLoggedInUser] = useState();
    const registerUser=(email,password,name,e)=>{
        createUserWithEmailAndPassword(auth, email, password)
    .then((data) => { 
        updateName(name)})
    .catch((error) => {
    console.log(error.message);
    })
    }

    const updateName=(name)=>{
        updateProfile(auth.currentUser, {
            displayName: name 
          })
          .then(res=>{})
    }

    const loginUser=(email,password,e)=>{
        signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
    })
    .catch((error) => {
    console.log(error.message)
    })};

    useEffect(()=>{
        onAuthStateChanged(auth,user => {
            if (user) {
                setLoggedInUser(user)
            }
            else{
                setLoggedInUser(null);
            }
          })
    },[auth.currentUser]);

    const logOut=()=>{
        signOut(auth)
        .then(() => {
          })
          .catch((error) => {
            console.log(error.message);
          });
    }
    return (
        {
        registerUser,
        loginUser,
        logOut,
        loggedInUser
        }
    );
};

export default useAuth;