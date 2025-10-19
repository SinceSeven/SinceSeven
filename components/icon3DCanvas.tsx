"use client";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Bounds,
} from "@react-three/drei";

interface Icon3DCanvasProps {
  name: string;
  size?: number;
}

export function Icon3DCanvas({ name, size = 48 }: Icon3DCanvasProps) {
  const { scene } = useGLTF(`/icons/${name}.glb`);

  return (
    <Canvas style={{ width: size, height: size }}>
      <PerspectiveCamera makeDefault position={[0, 0, 2]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Bounds fit clip observe damping={6}>
        <primitive object={scene} />
      </Bounds>
      <OrbitControls />
    </Canvas>
  );
}
