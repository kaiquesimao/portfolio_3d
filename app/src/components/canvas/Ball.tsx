import {
  Decal,
  Float,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  View,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  memo,
  Suspense,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";

type Technology = {
  name: string;
  icon: string;
};

const Ball = memo((props: { imgUrl: string }) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/*
        Match original R3F Canvas framing (fov 75 @ z=5).
        ~2.4 fills View slots well; Float bob still keeps a small margin.
      */}
      <mesh scale={2.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
        />
      </mesh>
    </Float>
  );
});

Ball.displayName = "Ball";

const BallView = memo(({ icon, className }: { icon: string; className?: string }) => {
  return (
    <View className={className} frames={Infinity}>
      <Suspense fallback={null}>
        {/* fov 75 matches R3F default Camera — drei PerspectiveCamera defaults to 50 and over-zooms */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </View>
  );
});

BallView.displayName = "BallView";

// Fixed fullscreen canvas is required by drei View: track rects use
// viewport coords, and isOffscreen compares against canvas size — a
// section-sized canvas incorrectly culls balls while scrolling.
const canvasStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
  zIndex: 1,
};

const BallCanvas = memo(({ technologies }: { technologies: Technology[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "120px 0px" },
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={"relative z-1 flex flex-row flex-wrap justify-center gap-10"}
    >
      {technologies.map((tech) => (
        <BallView
          key={tech.name}
          icon={tech.icon}
          className={"size-28 cursor-pointer"}
        />
      ))}
      <Canvas
        eventSource={containerRef as RefObject<HTMLElement>}
        eventPrefix={"client"}
        frameloop={isInView ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
        style={canvasStyle}
      >
        <View.Port />
      </Canvas>
    </div>
  );
});

BallCanvas.displayName = "BallCanvas";
export default BallCanvas;
