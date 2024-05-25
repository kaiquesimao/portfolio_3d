import CanvasLoader from "../Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import MobileContext from "../../contexts/MobileContext.tsx";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const isMobile = useContext(MobileContext);
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.0}
        position={isMobile ? [0, -1, -1.4] : [0, -1.7, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div className={`${isMobile ? "h-64" : "h-96"} w-full`}>
      <Canvas
        frameloop={"demand"}
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
