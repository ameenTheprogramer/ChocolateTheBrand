import React from 'react'
import './Log.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth'

function Log() {
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    const auth = getAuth()
  
    const submitfunctions =(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password).then(()=>{
        // alert('Logged in')
        navigate('/ChocolateTheBrand/')
  
      }).catch((error)=>{
        alert(error.message)
      })
  
    }
  
  
  
  
  
  
    return (
      <div className='container2'>
        <div className='block12' >
          <form onSubmit={(e)=>submitfunctions(e)} >
            
            <p className='lbl2' style={{marginTop:'50px'}} >email</p>
  
            <input className='inpt2' type="email" name="" id="mail" 
            
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <p className='lbl2'>password</p>
  
            <input className='inpt2' id='pass' type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
  
           
  
            <input type="submit" value="Log in" id='submitbtn2'  />
  
            <p className='log2'>Don't have a account <a onClick={()=>{
              navigate('/signup')
            }} className='notalink2'>Sign up ?</a></p>
  
          </form>
        </div>
        
      </div>
    )
}

export default Log
