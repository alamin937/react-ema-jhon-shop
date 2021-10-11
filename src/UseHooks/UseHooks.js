import { getAuth, signInWithPopup, GoogleAuthProvider , signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();



const UseHooks = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
       .catch(error =>{
           setError(error.message)
       })
    } 
    
    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({});
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
        })
    },[])
    
    return{
        user,
        logOut,
        error,
        googleSignIn
    }


}

export default UseHooks;