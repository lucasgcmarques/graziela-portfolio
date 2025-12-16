"use client";

import { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Image,
  Preload,
  Text,
  useTexture,
  Billboard,
} from "@react-three/drei";
import { easing } from "maath";
import { useRouter } from "next/navigation";
import "./util";

// Preload das imagens
useTexture.preload("/images/Frame 2.png");
useTexture.preload("/images/Frame 3.png");
useTexture.preload("/images/Frame 4.png");
useTexture.preload("/images/Frame 5.png");
useTexture.preload("/images/Frame 6.png");

// Menu items com imagens diferentes para cada
const MENU_ITEMS = [
  { label: "Home", href: "/", image: "/images/Frame 2.png" },
  { label: "Projetos", href: "/projects", image: "/images/Frame 3.png" },
  { label: "Sobre", href: "/about", image: "/images/Frame 4.png" },
  { label: "Contato", href: "/contact", image: "/images/Frame 5.png" },
  { label: "Showcase", href: "/showcase", image: "/images/Frame 6.png" },
];

export default function Carousel3DCanvas() {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={4} infinite>
            <Rig rotation={[0, 0, 0]}>
              <Carousel onNavigate={handleNavigate} />
            </Rig>
          </ScrollControls>
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Preload all />
      </Canvas>
    </div>
  );
}

function Rig(props: {
  rotation?: [number, number, number];
  children?: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (!ref.current) return;
    // Rotação no eixo X para carrossel vertical
    ref.current.rotation.x = -scroll.offset * (Math.PI * 2);
    state.events.update?.();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y * 2, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}

interface CarouselProps {
  radius?: number;
  onNavigate: (href: string) => void;
}

function Carousel({ radius = 1.4, onNavigate }: CarouselProps) {
  const count = MENU_ITEMS.length;
  return (
    <group position={[1, 0, 0]}>
      {MENU_ITEMS.map((item, i) => (
        <MenuItem
          key={item.href}
          url={item.image}
          label={item.label}
          href={item.href}
          onNavigate={onNavigate}
          position={[
            0,
            Math.sin((i / count) * Math.PI * 2) * radius,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[-(i / count) * Math.PI * 2, 0, 0]}
        />
      ))}
    </group>
  );
}

interface MenuItemProps {
  url: string;
  label: string;
  href: string;
  onNavigate: (href: string) => void;
  position: [number, number, number];
  rotation: [number, number, number];
}

function MenuItem({ url, label, href, onNavigate, ...props }: MenuItemProps) {
  const ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const imageGroupRef = useRef<THREE.Group>(null);
  const billboardRef = useRef<THREE.Group>(null);
  const [hovered, hover] = useState(false);

  const pointerOver = (e: THREE.Event) => {
    (e as any).stopPropagation();
    hover(true);
    document.body.style.cursor = "pointer";
  };
  const pointerOut = () => {
    hover(false);
    document.body.style.cursor = "auto";
  };
  const onClick = () => {
    onNavigate(href);
  };

  useFrame((state, delta) => {
    if (!ref.current?.material) return;
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    const mat = ref.current.material as any;
    if ("radius" in mat) {
      easing.damp(mat, "radius", hovered ? 0.25 : 0.1, 0.2, delta);
    }
    if ("zoom" in mat) {
      easing.damp(mat, "zoom", hovered ? 1 : 1.5, 0.2, delta);
    }

    // Detectar se o card está de costas para a câmera
    if (groupRef.current && billboardRef.current && imageGroupRef.current) {
      const cardWorldPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(cardWorldPos);

      const cardNormal = new THREE.Vector3(0, 0, 1);
      cardNormal.applyQuaternion(
        groupRef.current.getWorldQuaternion(new THREE.Quaternion())
      );

      const toCamera = new THREE.Vector3();
      toCamera.subVectors(state.camera.position, cardWorldPos).normalize();

      const dot = cardNormal.dot(toCamera);

      // Se dot < 0, o card está de costas - mover texto para trás e inverter imagem
      const targetZ = dot < 0 ? -0.05 : 0.05;
      billboardRef.current.position.z = THREE.MathUtils.lerp(
        billboardRef.current.position.z,
        targetZ,
        0.1
      );

      // Inverter a imagem quando estiver de costas (rotação de 180° no eixo Z para corrigir de cabeça para baixo)
      const targetRotationZ = dot < 0 ? Math.PI : 0;
      imageGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        imageGroupRef.current.rotation.z,
        targetRotationZ,
        0.15
      );
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <group ref={imageGroupRef}>
        <Image
          ref={ref as any}
          url={url}
          transparent
          side={THREE.DoubleSide}
          onPointerOver={pointerOver}
          onPointerOut={pointerOut}
          onClick={onClick}
        />
      </group>
      <Billboard
        ref={billboardRef as any}
        position={[0, 0, 0.05]}
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
        renderOrder={10}
      >
        <Text
          fontSize={0.12}
          color={hovered ? "#22d3ee" : "#ffffff"}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          material-depthTest={false}
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
}
