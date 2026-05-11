'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WireframeBuilding() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  const floors = 6
  const width = 1.4
  const depth = 1.0
  const floorHeight = 0.35

  return (
    <group ref={group} position={[0, -1.2, 0]}>
      {/* Main building body */}
      {Array.from({ length: floors }).map((_, i) => (
        <group key={i} position={[0, i * floorHeight, 0]}>
          <mesh>
            <boxGeometry args={[width, floorHeight, depth]} />
            <meshBasicMaterial color="#8b2635" wireframe />
          </mesh>
        </group>
      ))}
      {/* Windows */}
      {Array.from({ length: floors }).map((_, floor) =>
        [-0.45, 0, 0.45].map((x, col) => (
          <mesh key={`${floor}-${col}`} position={[x, floor * floorHeight + floorHeight * 0.5, depth / 2 + 0.01]}>
            <planeGeometry args={[0.18, 0.18]} />
            <meshBasicMaterial color="#8b263540" wireframe={false} transparent opacity={0.3} />
          </mesh>
        ))
      )}
      {/* Roof structure */}
      <mesh position={[0, floors * floorHeight + 0.15, 0]}>
        <boxGeometry args={[width * 0.8, 0.3, depth * 0.8]} />
        <meshBasicMaterial color="#c0392b" wireframe />
      </mesh>
      {/* Foundation */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[width + 0.3, 0.2, depth + 0.3]} />
        <meshBasicMaterial color="#8b2635" wireframe />
      </mesh>
      {/* Scaffolding left */}
      <mesh position={[-width / 2 - 0.2, floors * floorHeight * 0.5, 0]}>
        <boxGeometry args={[0.04, floors * floorHeight, 0.04]} />
        <meshBasicMaterial color="#8b263570" wireframe />
      </mesh>
      {/* Scaffolding right */}
      <mesh position={[width / 2 + 0.2, floors * floorHeight * 0.5, 0]}>
        <boxGeometry args={[0.04, floors * floorHeight, 0.04]} />
        <meshBasicMaterial color="#8b263570" wireframe />
      </mesh>
      {/* Crane arm */}
      <mesh position={[width / 2 + 0.5, floors * floorHeight + 0.4, 0]} rotation={[0, 0, Math.PI / 8]}>
        <boxGeometry args={[0.04, 1.4, 0.04]} />
        <meshBasicMaterial color="#c0392b" wireframe />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
      <planeGeometry args={[12, 12, 12, 12]} />
      <meshBasicMaterial color="#8b2635" wireframe transparent opacity={0.1} />
    </mesh>
  )
}

export default function BuildingScene() {
  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 8, 5]} color="#8b2635" intensity={1} />
      <pointLight position={[-5, 3, -3]} color="#c0392b" intensity={0.5} />
      <WireframeBuilding />
      <Ground />
    </Canvas>
  )
}
