import React, { useEffect, useState } from 'react'
import './Header.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/FirebaseContext'
import { getAuth , signOut } from 'firebase/auth'



function Onlyif(){
  const auth = getAuth()
  const navigate = useNavigate()

  const logout  =()=>{
    signOut(auth);
    
    navigate('/login')
  }
  
    return(
      <div style={{left:'51.5%',width:'11%'}} className='hlinks'>
        <a className='notlink sl hoverline' onClick={()=>{
          navigate('/create')
        }} >sell</a>
        <a className='notlink sl hoverline' onClick={logout} >log out</a>
      </div>
    )
  
}





function Header() {
  const navigate = useNavigate()
  
  // const [userData, setUserData]= useState({})
  // const [username, setUsername]= useState()


  const {user} = useContext(AuthContext)
  
  // useEffect(()=>{
  //   setUserData(user)
  //   if(!username?.displayName){
  //     setUsername(user?.displayName)
  //   }
  //   setUsername(user?.displayName)
  // },[user,user?.displayName])




  const nav2 = ()=>{
    navigate('/login')
  }
  const nav1 = ()=>{
    navigate('/')
  }


  return (
    <div className='header'>
      <div className='logo'>
        <h1>Logo</h1>
      </div>
      <div className={user? 'hlinks s2' : 'hlinks'}>
        <a className='notlink s1' onClick={user ? nav1 : nav2} >
          {user ? `Welcome  ${user.displayName ? user.displayName : ' ' }` :'Login'}</a>

        <a className='producks hoverline' onClick={()=>{
          document.documentElement.scrollTop = 673
          
        }} >Products</a>
      </div>
      {user? <Onlyif /> : null }


      
    </div>
  )
}

export default Header
