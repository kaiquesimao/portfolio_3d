import { useRef, Suspense } from "react";
import { random } from "maath";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import THREE, { TypedArray } from "three";
const Stars = () => {
  const ref = useRef<THREE.Object3D | null>(null);

  const tempArray = new Float64Array(5000);
  random.inSphere(tempArray, {
    radius: 1.2,
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
    <group rotation={[0, 0, Math.PI / 4]}>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*// @ts-ignore*/}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
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
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all={true} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
