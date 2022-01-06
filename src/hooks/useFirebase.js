import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = ()=>{
    const auth=getAuth();
    const [user,setUser]=useState({});
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')

    const signInUsingGoogle=() => {
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
  .then((result) => {
     setUser(result.user)
  });


    }
    const logOut=() => {
        signOut(auth)
        .then(()=>{});
    }
    const signInUsingEmail=(e)=>{
        createUserWithEmailAndPassword(auth, email, password)
        setEmail(e.target.value)
        setPassword(e.target.value)
            .then((userCredential) => {
   
  })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
   
  } else {
      setUser({})
    
  }
});
    },[])
    return{
        user,
        signInUsingGoogle,
        logOut,
        email,
        password,
        signInUsingEmail
    }

}

export default useFirebase;