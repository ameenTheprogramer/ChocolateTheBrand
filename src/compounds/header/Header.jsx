import React, { useEffect, useState } from 'react'
import './Header.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/FirebaseContext'
import { getAuth , signOut } from 'firebase/auth'
import { click } from '@testing-library/user-event/dist/click'



function Onlyif(){
  const auth = getAuth()
  const navigate = useNavigate()

  const logout  =()=>{
    signOut(auth);
    
    navigate('/login')
  }
  
    return(
      <div id='opaciti0' style={{left:'51.5%',width:'11%'}} className='hlinks'>
        <a className='notlink sl hoverline' onClick={()=>{
          navigate('/create')
        }} >sell</a>
        <a className='notlink sl hoverline' onClick={logout} >log out</a>
      </div>
    )
  
}


function If320to425width (){
  const navigate = useNavigate()

  const nav2 = ()=>{
    navigate('/login')
  }
  const nav1 = ()=>{
    navigate('/ChocolateTheBrand/')
  }
  const auth = getAuth()

  const logout  =()=>{
    signOut(auth);
    
    navigate('/login')
  }

  let menubtn = document.getElementById('menubtn')

  const onClickOutsideTargetDiv =(e)=> {
    const targetDiv = document.getElementById('menudiv');
  
    if (!targetDiv.contains(e.target)) {
    document.removeEventListener('click', onClickOutsideTargetDiv);
    let menudiv = document.getElementById('menudiv')
    menudiv.style.display = 'none'
    }
  }



  const menuhovered =()=>{
    let menudiv = document.getElementById('menudiv')
    menudiv.style.display = 'block'
    document.addEventListener('click', onClickOutsideTargetDiv);
    // alert('hovered')
  }

  const {user} = useContext(AuthContext)


  return(
    <div>
      <button className='menubtn' onMouseOver={menuhovered} onClick={menuhovered} id='menubtn'>


      <p>menu 
        
        <i class="fa-solid fa-angle-down menuangle"></i>
        </p>
      </button>
      <div className='menudiv' id='menudiv'>
        <div className='menuitems'  onClick={user ? nav1 : nav2} >
        <a className='notlink s1' onClick={user ? nav1 : nav2} >
          {user ? `Welcome  ${user.displayName ? user.displayName : ' ' }` :'Login'}</a>
        </div>
        <div className='menuitems' onClick={()=>{
          document.documentElement.scrollTop = 300
          
        }}>
        <a className='producks hoverline' onClick={()=>{
          document.documentElement.scrollTop = 300
          
        }} >Products</a>
        </div>


       { user ?
       <div>
        <div className='menuitems' onClick={()=>{
          navigate('/create')
        }}>
        <a className='notlink sl hoverline' onClick={()=>{
          navigate('/create')
        }} >sell</a>
        </div>
        <div className='menuitems' onClick={logout}>
        <a className='notlink sl hoverline' onClick={logout} >log out</a>
        </div> 
        </div> : null}


        


       </div>
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
    navigate('/ChocolateTheBrand/')
  }


  return (
    <div className='header'>
      <div className='logo'>
        <h1>Logo</h1>
      </div>
      {window.innerWidth < '425px' ? null : <If320to425width/>}


      <div id='opaciti0'  className={user? 'hlinks s2' : 'hlinks'}>
        <a className='notlink s1' onClick={user ? nav1 : nav2} style={{opacity:`${window.innerWidth < '425'? 0 : 1 }`}} >
          {user && window.innerWidth > '425' ? `Welcome  ${user.displayName ? user.displayName : ' ' }` :'Login'}</a>

        <a className='producks hoverline' onClick={()=>{
          document.documentElement.scrollTop = 673
          
        }} >Products</a>
      </div>
      {user ? <Onlyif /> : null }


      
    </div>
  )
}

export default Header
