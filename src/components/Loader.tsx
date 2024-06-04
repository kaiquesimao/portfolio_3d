import { Html } from "@react-three/drei";
import { memo } from "react";

const Loader = memo(() => {
  return (
    <Html>
      <div className={"canvas-loader"}></div>
    </Html>
  );
});

Loader.displayName = "Loader";
export default Loader;
