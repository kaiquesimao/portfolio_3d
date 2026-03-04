import CanvasLoader from "../Loader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, Suspense, useContext } from "react";
import MobileContext from "../../contexts/MobileContext.tsx";

const Computer = memo(() => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
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
        shadow-mapSize={512}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -1, -1.4] : [0, -1.7, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

Computer.displayName = "Computer";

const ComputerCanvas = memo(() => {
  const isMobile = useContext(MobileContext);

  return (
    <div className={`${isMobile ? "h-64" : "h-96"} w-full cursor-pointer`}>
      <Canvas
        frameloop={"demand"}
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computer />
        </Suspense>
      </Canvas>
    </div>
  );
});

ComputerCanvas.displayName = "ComputerCanvas";
export default ComputerCanvas;
