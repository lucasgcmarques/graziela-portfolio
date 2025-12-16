"use client";

import { useEffect, useRef } from "react";

export default function CubeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamic import Three.js only on client side
    const initThree = async () => {
      const THREE = await import("three");

      const container = containerRef.current;
      if (!container) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 6;

      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const directionalLight1 = new THREE.DirectionalLight(0xfff5f0, 1);
      directionalLight1.position.set(5, 5, 5);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xfbd8de, 0.5);
      directionalLight2.position.set(-5, -5, 5);
      scene.add(directionalLight2);

      // Materials
      const material1 = new THREE.MeshStandardMaterial({
        color: 0xf28da0,
        roughness: 0.4,
        metalness: 0.2,
        transparent: true,
        opacity: 0.6,
      });

      const material2 = new THREE.MeshStandardMaterial({
        color: 0xd9c2ae,
        roughness: 0.6,
        metalness: 0.1,
        transparent: true,
        opacity: 0.4,
      });

      const material3 = new THREE.MeshStandardMaterial({
        color: 0xfbd8de,
        roughness: 0.5,
        metalness: 0.15,
        transparent: true,
        opacity: 0.5,
      });

      // Cubes
      const geometry = new THREE.BoxGeometry(1, 1, 1);

      const cube1 = new THREE.Mesh(geometry, material1);
      cube1.scale.set(2.5, 2.5, 2.5);
      scene.add(cube1);

      const cube2 = new THREE.Mesh(geometry, material2);
      cube2.scale.set(1.5, 1.5, 1.5);
      cube2.position.set(-3, -1, -2);
      scene.add(cube2);

      const cube3 = new THREE.Mesh(geometry, material3);
      cube3.scale.set(1, 1, 1);
      cube3.position.set(3.5, 1.5, -3);
      scene.add(cube3);

      // Float animation parameters
      const floatParams = {
        cube1: { y: 0, speed: 1.5 },
        cube2: { y: -1, speed: 2 },
        cube3: { y: 1.5, speed: 1.8 },
      };

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        const time = performance.now() * 0.001;

        // Cube 1 rotation + float
        cube1.rotation.x = time * 0.15;
        cube1.rotation.y = time * 0.2;
        cube1.position.y = Math.sin(time * floatParams.cube1.speed) * 0.3;

        // Cube 2 rotation + float
        cube2.rotation.x = time * -0.1;
        cube2.rotation.y = time * 0.25;
        cube2.rotation.z = time * 0.08;
        cube2.position.y = floatParams.cube2.y + Math.sin(time * floatParams.cube2.speed) * 0.4;

        // Cube 3 rotation + float
        cube3.rotation.x = time * 0.12;
        cube3.rotation.y = time * -0.18;
        cube3.position.y = floatParams.cube3.y + Math.sin(time * floatParams.cube3.speed) * 0.25;

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        container.removeChild(renderer.domElement);
        geometry.dispose();
        material1.dispose();
        material2.dispose();
        material3.dispose();
        renderer.dispose();
      };
    };

    const cleanup = initThree();

    return () => {
      cleanup.then((cleanupFn) => cleanupFn?.());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
