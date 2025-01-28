import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import PublicAxios from '../Hook/PublicAxios/PublicAxios';


export const AuthContext = createContext()

const Provider = ({children}) => {
const [user,setuser]=useState(null);
const [loding,setloding]= useState(true)
const provider = new GoogleAuthProvider()
const axios = PublicAxios()
const Resistacesing =(email,password)=>{
    setloding(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const Login =(email,password)=>{
    setloding(true)
    return signInWithEmailAndPassword(auth,email,password);
}

const Singout =()=>{
    return signOut(auth);
}
const UpdateProfile = (update)=>{
    return updateProfile(auth.currentUser,update)
}


useEffect(()=>{
const onauth=  onAuthStateChanged(auth,uerscurrtent=>{
    setuser(uerscurrtent)
    setloding(false)
  if(uerscurrtent){
    const user= {email: uerscurrtent.email}
    axios.post('/jwt',user)
    .then(res=>{
        if(res.data.token){
            localStorage.setItem("access-token",res.data.token)
            setloding(false);
        }
        else{
            localStorage.removeItem("access-token")
            setloding(false);
        }
    })
  }

   
    })
    return ()=>{
        onauth()
    }
},[]
// [axios]
)


const Google = ()=>{
    return signInWithPopup(auth,provider)
}



const info={
    Resistacesing,
    Login,
    loding,
    user,
    Singout,
    UpdateProfile,
    Google
    
}

    return (
      <AuthContext.Provider value={info}>
{
    children
}
      </AuthContext.Provider>
    );
};

export default Provider;