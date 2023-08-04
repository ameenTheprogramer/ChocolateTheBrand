import React, { useRef, Suspense, useEffect } from 'react';
import * as THREE from 'three';
import chocolatebar from '../../3D/chocolatebar1.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// import React from 'react';
import { Canvas , useLoader  } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';






const Chocolate = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor('#140f0a')


       

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(chocolatebar, (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Optional: You can set the initial position of the model here
            model.position.set(1, 0, 1);
              model.rotation.set(0 , 48.5, 0)

        });

        camera.position.set(1, 1, 5)


        window.addEventListener('resize', function(){
            camera.aspect = this.window.innerWidth/ this.window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(this.window.innerWidth, this.window.innerHeight)
        })



        const animate = () => {
            //   requestAnimationFrame(animate);

            // Rotate the model to make it float around
            const model = scene.children[2];
            if (model) {
                
                
                model.rotation.y += -0.08;
            }

            renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate)

        animate();

        return () => {
            // Clean up Three.js objects if needed
        };
    }, []);

    return <canvas className='canwas' ref={canvasRef} />;
};









// function Model({ url }) {
//     const gltf = useLoader(GLTFLoader, url);
//     return (
//       <primitive object={gltf.scene} scale={1} />
//     );
//   }

// function Chocolate1(){
//     const gltfPath = chocolatebar;

//     return (
//       <Canvas>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Suspense fallback={null}>
//           <Model url={gltfPath} />
//         </Suspense>
//       </Canvas>
//     );
// }



export default Chocolate;
