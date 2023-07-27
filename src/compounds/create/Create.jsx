import React from 'react'
import './Create.css'
import { useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { getAuth  } from 'firebase/auth'
import cc from '../../images/choco1.jpeg'
import { AuthContext } from '../../store/FirebaseContext'
import  { getStorage, ref , getDownloadURL , uploadBytesResumable } from 'firebase/storage'
// import  * as firebase from 'firebase/app'
import firebase from 'firebase/compat/app';

import { firebaseConfig } from '../../config/Config'
const Firebase = firebase.initializeApp(firebaseConfig);



function Log() {
    const [productName,setProductName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [image,setImage] = useState(null)
    const {user} = useContext(AuthContext)
    const date = new Date

  const storage = getStorage()
  var db = Firebase.firestore()


    const navigate = useNavigate()
    // const auth = getAuth()
  





    
    const [percent, setPercent] = useState(0);
  const upload = (e) => {
    e.preventDefault()

    if (!image) {
        alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/image/${image.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                db.collection('products').add({
                  productName,
                  category,
                  price,
                  url,
                  userId:user.uid,
                  createdat : date.toDateString()
                }).then(()=>{
                  navigate('/')
                  alert("! successfully completed !")
                })
                
            });
        }
    );
};
  
  
  
  
  
  
    return (
      <div className='container23'>
     
        <div className='block123' style={{height: image?  '96%' : ''}} >
          <form onSubmit={(e)=>upload(e)} >
            
            <p className='lbl23' style={{marginTop:'50px'}} >Product name</p>
  
            <input className='inpt23' type="text" name="" id="mail" 
            
            value={productName}
            onChange={(e)=>setProductName(e.target.value)}
            />
            <p className='lbl23'>Category</p>
  
            <input className='inpt23' id='pass' type="text" 
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <p className='lbl23'>Price</p>
  
            <input className='inpt23' id='pass' type="number" 
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
          
            <p className='lbl23'>image</p>
            <img src={image? URL.createObjectURL(image) : ''} alt="" id='imageFile' />
            <div style={{display:'flex', alignItems:'center'}}>

            <input style={ {top:image ? '25px' : '0px'} } type="file" name="" id="file" onChange={(e)=>setImage(e.target.files[0]) } />
            </div>
  
           
  
            <input type="submit" value="upload and Submit" id='submitbtn23'  />
  
            {/* <p className='log23'>Don't have a account <a onClick={()=>{
              navigate('/signup')
            }} className='notalink23'>Sign up ?</a></p> */}
  
          </form>
        </div>
        
      </div>
    )
}

export default Log
