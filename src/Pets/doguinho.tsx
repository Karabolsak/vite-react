import "./style.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Modelo() {
  const { scene } = useGLTF("/Pets/Doguinho.glb"); 
  
  return <primitive object={scene} scale={0.1} />;
}

export default function Conversas() { 
  return (
    <div>
      <Canvas camera={{ position: [0, 1, 2], fov: 50 }}> 
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Modelo />
        </Suspense>
        <OrbitControls />
      </Canvas>

    </div>
  );
}