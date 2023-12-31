import React from "react";
import { useGLTF } from "@react-three/drei";

export function BarnTesting(props) {
  const { wall } = props;
  const { nodes, materials } = useGLTF("/Barn_Testing.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.Wood_Trim} />
        <mesh
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        >
          {wall["wall1Selected"] && <meshStandardMaterial color={"red"} />}
        </mesh>
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        >
          {wall["wall2Selected"] && <meshStandardMaterial color={"red"} />}
        </mesh>
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        >
          {wall["wall3Selected"] && <meshStandardMaterial color={"red"} />}
        </mesh>
        <mesh
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        >
          {wall["wall4Selected"] && <meshStandardMaterial color={"red"} />}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Barn_Testing.glb");
