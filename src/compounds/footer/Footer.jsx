import React, { useContext } from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/FirebaseContext'


function Footer() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  return (
    <div className='footer'>
        {user ? null :<button className='btn' onClick={()=>{
          navigate('/signup')
        }} >Sign up !</button>}
        <p className='copy'>&#169; 2023 by Chocolate The Brand. 
        
         Created by ameen</p>
      
    </div>
  )
}

export default Footer
