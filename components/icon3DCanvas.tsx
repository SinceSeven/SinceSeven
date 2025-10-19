"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Bounds,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface Icon3DCanvasProps {
  name: string;
  size?: number;
  animationType?: 'orbit' | 'bounce' | 'wave' | 'pulse' | 'spiral';
  speed?: number;
}

function AnimatedIcon({ 
  scene, 
  animationType = 'orbit',
  speed = 1
}: {
  scene: THREE.Object3D;
  animationType: 'orbit' | 'bounce' | 'wave' | 'pulse' | 'spiral';
  speed: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime * speed;

    switch (animationType) {
      case 'orbit':
        // Circular orbit animation
        meshRef.current.position.x = Math.cos(time) * 0.2;
        meshRef.current.position.z = Math.sin(time) * 0.2;
        meshRef.current.rotation.y = time;
        break;

      case 'bounce':
        // Bouncing animation
        meshRef.current.position.y = Math.abs(Math.sin(time * 2)) * 0.3;
        meshRef.current.rotation.x = Math.sin(time) * 0.1;
        break;

      case 'wave':
        // Wave-like movement
        meshRef.current.position.y = Math.sin(time) * 0.15;
        meshRef.current.position.x = Math.sin(time * 0.5) * 0.1;
        meshRef.current.rotation.z = Math.sin(time * 0.8) * 0.2;
        break;

      case 'pulse':
        // Pulsing scale animation
        const scale = 1 + Math.sin(time * 3) * 0.1;
        meshRef.current.scale.setScalar(scale);
        meshRef.current.rotation.y = time * 0.5;
        break;

      case 'spiral':
        // Spiral animation
        meshRef.current.position.x = Math.cos(time) * 0.15;
        meshRef.current.position.y = Math.sin(time * 2) * 0.1;
        meshRef.current.position.z = Math.sin(time) * 0.15;
        meshRef.current.rotation.y = time * 2;
        meshRef.current.rotation.x = time * 0.5;
        break;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} />
    </group>
  );
}

export function Icon3DCanvas({ 
  name, 
  size = 48, 
  animationType = 'orbit',
  speed = 1
}: Icon3DCanvasProps) {
  const { scene } = useGLTF(`/icons/${name}.glb`);

  return (
    <Canvas style={{ width: size, height: size }}>
      <PerspectiveCamera makeDefault position={[0, 0, 2]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <pointLight position={[-2, -2, -2]} intensity={0.3} />
      <Bounds fit clip observe>
        <AnimatedIcon 
          scene={scene} 
          animationType={animationType}
          speed={speed}
        />
      </Bounds>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}