import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = React.memo(() => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    ></primitive>
  );
});

const EarthCanvas = React.memo(() => {
  return (
    <Canvas
      shadows={true}
      frameloop={"demand"}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  );
});

export default EarthCanvas;
