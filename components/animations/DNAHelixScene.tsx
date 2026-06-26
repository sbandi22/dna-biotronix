'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BASE_PAIR_COLORS = ['#FF6B6B', '#4FC3F7', '#81C784', '#FFB74D']

function createHelixPoints(offsetAngle: number, turns: number, totalPoints: number, radius: number, height: number) {
  const points: THREE.Vector3[] = []
  for (let i = 0; i <= totalPoints; i++) {
    const t = (i / totalPoints) * turns * Math.PI * 2
    points.push(
      new THREE.Vector3(
        Math.cos(t + offsetAngle) * radius,
        (i / totalPoints) * height - height / 2,
        Math.sin(t + offsetAngle) * radius
      )
    )
  }
  return points
}

function BasePairBridge({ p1, p2, color }: { p1: THREE.Vector3; p2: THREE.Vector3; color: string }) {
  const mid = useMemo(() => new THREE.Vector3().lerpVectors(p1, p2, 0.5), [p1, p2])
  const length = useMemo(() => p1.distanceTo(p2), [p1, p2])
  const quat = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(p2, p1).normalize()
    return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)
  }, [p1, p2])

  return (
    <group position={mid} quaternion={quat}>
      <mesh>
        <cylinderGeometry args={[0.035, 0.035, length, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, -length / 2, 0]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[0, length / 2, 0]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.2} />
      </mesh>
    </group>
  )
}

function DNAGroup() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.18
    }
  })

  const TURNS = 4
  const HEIGHT = 14
  const RADIUS = 1.8
  const POINTS = 280

  const curve1 = useMemo(() => {
    const pts = createHelixPoints(0, TURNS, POINTS, RADIUS, HEIGHT)
    return new THREE.CatmullRomCurve3(pts)
  }, [])

  const curve2 = useMemo(() => {
    const pts = createHelixPoints(Math.PI, TURNS, POINTS, RADIUS, HEIGHT)
    return new THREE.CatmullRomCurve3(pts)
  }, [])

  const basePairs = useMemo(() => {
    const count = 30
    return Array.from({ length: count }, (_, i) => {
      const t = i / (count - 1)
      return {
        p1: curve1.getPoint(t),
        p2: curve2.getPoint(t),
        color: BASE_PAIR_COLORS[i % BASE_PAIR_COLORS.length],
      }
    })
  }, [curve1, curve2])

  return (
    <group ref={groupRef}>
      {/* Lights */}
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} color="#0066FF" intensity={4} />
      <pointLight position={[-4, -4, 4]} color="#00B4FF" intensity={3} />
      <pointLight position={[0, 8, -4]} color="#ffffff" intensity={1} />

      {/* Backbone strand 1 */}
      <mesh>
        <tubeGeometry args={[curve1, 280, 0.065, 10, false]} />
        <meshStandardMaterial
          color="#1a6eff"
          emissive="#0044cc"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Backbone strand 2 */}
      <mesh>
        <tubeGeometry args={[curve2, 280, 0.065, 10, false]} />
        <meshStandardMaterial
          color="#00B4FF"
          emissive="#006688"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Base pairs */}
      {basePairs.map((bp, i) => (
        <BasePairBridge key={i} p1={bp.p1} p2={bp.p2} color={bp.color} />
      ))}
    </group>
  )
}

export default function DNAHelixScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <DNAGroup />
    </Canvas>
  )
}
