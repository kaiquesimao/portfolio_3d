import { Html } from "@react-three/drei";
import React from "react";

const Loader = React.memo(() => {
  return (
    <Html>
      <div className={"canvas-loader"}></div>
    </Html>
  );
});

export default Loader;
