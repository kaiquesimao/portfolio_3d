import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className={"canvas-loader"}>
        <p
          style={{
            fontSize: 14,
            color: "white",
            fontWeight: 800,
          }}
        >
          Loading...{progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
