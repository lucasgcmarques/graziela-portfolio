import { Object3DNode, MaterialNode } from "@react-three/fiber";
import * as THREE from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    bentPlaneGeometry: Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
    meshSineMaterial: MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      bentPlaneGeometry: any;
      meshSineMaterial: any;
    }
  }
}

export {};

