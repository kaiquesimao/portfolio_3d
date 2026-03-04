import { memo, Suspense, useMemo, useRef } from "react";
import { random } from "maath";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

const Stars = memo(() => {
  const ref = useRef<THREE.Group | null>(null);
  const sphere = useMemo(() => {
    const points = new Float32Array(15003);

    random.inSphere(points, {
      radius: 10,
    });

    return points;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current !== null) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      ref.current.rotation.z -= delta / 10;
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

Stars.displayName = "Stars";

const StarsCanvas = memo(() => {
  return (
    <div className={"absolute inset-0 z-[-1] h-auto w-full"}>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
});

StarsCanvas.displayName = "StarsCanvas";
export default StarsCanvas;
