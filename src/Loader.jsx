import React from "react";
import Lottie from "lottie-react";
import animationData from "./Animation - 1746623409423.json"; 

const Loader = () => (
  <div className="flex bg-vanta-custom items-center justify-center min-h-screen bg-[#07192f]">
    <Lottie animationData={animationData} loop={true} style={{ width: 500, height: 500 }} />
  </div>
);

export default Loader;
