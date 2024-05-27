import { useRef, Suspense } from "react";
import { random } from "maath";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import THREE, { TypedArray } from "three";

const Stars = () => {
  const ref = useRef<THREE.Points | null>(null);
  const tempArray = new Float64Array(15003);
  random.inSphere(tempArray, {
    radius: 10.0,
  });
  const sphere: TypedArray = new Float32Array(tempArray);
  useFrame((_state, delta) => {
    if (ref.current !== null) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      ref.current.rotation.z -= delta / 10;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
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
};

const StarsCanvas = () => {
  return (
    <div className={"absolute inset-0 z-[-1] h-auto w-full"}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all={true} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
