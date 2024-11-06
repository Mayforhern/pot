// ParticleRing.tsx

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { Group } from "three";

const ParticleRing = () => {
    return (
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{
            position: [10, -7.5, -5],
          }}
          style={{ height: "100vh", width: "100vw" }}
          className="bg-transparent"
        >
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <OrbitControls maxDistance={20} minDistance={10} />
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <PointCircle />
        </Canvas>
      </div>
    );
  };
  
const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position as [number, number, number]} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position as [number, number, number]} color={point.color} />
      ))}
    </group>
  );
};

interface PointProps {
  position: [number, number, number];
  color: string;
}

const Point: React.FC<PointProps> = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
