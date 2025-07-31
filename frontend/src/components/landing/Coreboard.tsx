"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface CoreBoardModelProps {
  modelPath: string;
}

export function CoreBoard3D({ modelPath }: CoreBoardModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0.5, 0.5, 0.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.minPolarAngle = Math.PI / 3;
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-5, -5, -5);
    scene.add(pointLight);
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const loadedModel = gltf.scene;
        loadedModel.scale.set(0.008, 0.008, 0.008);
        loadedModel.rotation.y = Math.PI / 4;
        loadedModel.position.set(0, 0, 0);
        scene.add(loadedModel);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF:", error);
        setHasError(true);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    const currentContainer = containerRef.current;

    return () => {
      controls.dispose();
      renderer.dispose();
      scene.clear();
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (!container || !rendererRef.current || !cameraRef.current) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-blue-500/10 rounded-lg border border-blue-500/20">
        <p className="text-blue-300 text-sm">3D Model Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] flex items-center justify-center">
      <div ref={containerRef} className="w-full h-full"></div>
    </div>
  );
}
