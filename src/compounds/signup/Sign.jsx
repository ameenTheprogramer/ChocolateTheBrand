import { AuthContext } from '../../store/FirebaseContext'
import { useState , useContext , useEffect } from 'react' 
import 'firebase/compat/firestore'
import React from 'react'
import './Sign.css'
import { useNavigate } from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth'

import { firebaseConfig } from '../../config/Config'
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
const Firebase = firebase.initializeApp(firebaseConfig);


function Sign() {

  // const {user} = useContext(AuthContext)

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const navigate = useNavigate()
  var db = Firebase.firestore()
  const {setUser}= useContext(AuthContext)




  const auth = getAuth();


  const submitfunctions2 =(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      // console.log(userCredential);
      let user = auth.currentUser;
       updateProfile(user, {
        displayName: userName,
        phoneNumber: phoneNumber
      }).catch((error)=>{
        alert(error.message)
      })
      db.collection('users').add({
        id : user.uid,
        username : userName,
        email : email,
        phone : phoneNumber,
        password : password
      })
    
      
      
      
    }).then(()=>{
      navigate('/')
      

      // alert('signed up')
    })


    //smthn to do

  }



  return (
    <div className='container'>
      <div className='block1' >
        <form onSubmit={(e)=>submitfunctions2(e)} >
          <p className='lbl' style={{marginTop:'35px'}} >username</p>
          <input className='inpt' id='usern' type="text" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
          <p className='lbl'>password</p>

          <input className='inpt' id='pass' type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <p className='lbl'>email</p>

          <input className='inpt' type="email" name="" id="mail" 
          
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />

          <p className='lbl'>phone number</p>

          <input className='inpt' type="number" name="" id="phnum" 
          
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          />

          <input type="submit" value="Create a account" id='submitbtn' />

          <p className='log'>Already have a account <a onClick={()=>{
            navigate('/login')
          }} className='notalink'>login ?</a></p>

        </form>
      </div>
      
    </div>
  )
}

export default Sign
