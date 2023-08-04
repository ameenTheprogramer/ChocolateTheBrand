import React from 'react'
import Header from '../compounds/header/Header'
import Container from '../compounds/container/Container'
import Footer from '../compounds/footer/Footer'
import Chocolate1 from '../compounds/chocolate/chocolate'



// const GLBModelViewer = ({ src }) => {
//   return (
//     <model-viewer
//       src={src}
//       alt="Your 3D Model"
//       loading="lazy"
//       ar
//       ar-modes="webxr scene-viewer quick-look"
//       environment-image="neutral"
//       camera-controls
//       auto-rotate
//       shadow-intensity="1"
//       camera-orbit="45deg 45deg 2m"
//       exposure="1"
//       style={{ width: '100%', height: '100vh' }}
//     >
//       {/* Provide fallback content in case the model can't be displayed */}
//       <div>
//         <p>Your browser does not support 3D models.</p>
//       </div>
//     </model-viewer>
//   );
// };



function Home() {
  // const  myFunction = ()=>{
  //     let ee = document.documentElement.scrollTop || document.body.scrollTop
  //     console.log(ee);
  // }
  
  return (
    <div>
        <Header/>
        <Container/>
        <Chocolate1/>
        <Footer/>
        {/* <script>
          {
            window.addEventListener('scroll', myFunction )
            
          }
        </script> */}
    </div>
  )
}

export default Home
