import React from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF,PresentationControls } from '@react-three/drei'
function Model(props){
    const { scene } = useGLTF('./bitcoin.glb')
    return <primitive object={scene} {...props} /> 
}

const OurModel = () => {
  return (
    <div style={{ position: "relative" }}>
      <Canvas shadows camera={{ fov: 45 }} style={{ position: "absolute", top: "7%" }} >
        <color attach="background" args={['#101010']} /> 
        <ambientLight intensity={0.5} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]} />
        <Model scale={0.01} /> 
      </Canvas>
    </div>
  )
}

export default OurModel
