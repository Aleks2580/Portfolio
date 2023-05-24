import { Html, useProgress } from "@react-three/drei";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Loader = () => {
  const { theme } = useContext(ThemeContext);
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: `${theme === "light" ? "#111111" : "#f1f1f1"}`,
          fontWeight: 800,
          margin: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
