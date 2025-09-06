"use client";
import { useEffect } from "react";
import { Gradient } from "./ui/gradient.tsx";
import Hero from "./Hero.tsx";

const MeshBackground = () => {
  useEffect(() => {
    // Initialize the gradient after the component mounts
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Canvas for the gradient background */}
      <canvas
        id="gradient-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "--gradient-color-1": "#a960ee",
          "--gradient-color-2": "#ff333d",
          "--gradient-color-3": "#90e0ff",
          "--gradient-color-4": "#ffcb57",
        }}
      />
      {/* <Hero /> */}
    </div>
  );
};

export { MeshBackground };
