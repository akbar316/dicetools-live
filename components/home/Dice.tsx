
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Edges } from '@react-three/drei';
import * as THREE from 'three';

const DiceMesh = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d')!;
    context.font = 'bold 90px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = 'white';

    const numbers = ['1', '2', '3', '4', '5', '6'];
    const textures = numbers.map(num => {
      context.fillStyle = '#1e293b'; // dark-slate-800
      context.fillRect(0, 0, 256, 256);
      context.fillStyle = 'white';
      context.fillText(num, 128, 128);
      return new THREE.CanvasTexture(canvas);
    });
    return textures;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Box ref={ref} args={[3, 3, 3]}>
      {texture.map((tex, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} map={tex} roughness={0.1} metalness={0.8} />
      ))}
      <Edges scale={1.001} threshold={15}>
        <lineBasicMaterial color="#6366f1" linewidth={4} />
      </Edges>
    </Box>
  );
};

const Dice = () => {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#fde047" />
      <DiceMesh />
    </Canvas>
  );
};

export default Dice;
