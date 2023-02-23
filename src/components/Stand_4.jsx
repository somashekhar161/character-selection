

import React, { useEffect ,useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Stand_4.glb')
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
          <group name="Ch44">
            <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Ch44_Body} skeleton={nodes.Mesh.skeleton} />
            <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.Ch44_body1} skeleton={nodes.Mesh_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Stand_4.glb')
