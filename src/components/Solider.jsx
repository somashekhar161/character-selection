

import React, {  useEffect ,useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Solider.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions.Standing.play();
    actions.Standing.halt();
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, -3.2, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.035}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Ch15">
            <skinnedMesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={materials.Ch15_body} skeleton={nodes.Mesh001.skeleton} />
            <skinnedMesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={materials.Ch15_body1} skeleton={nodes.Mesh001_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Solider.glb')
