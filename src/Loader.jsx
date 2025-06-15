import Lottie from "lottie-react";
import animationData from "./Animation - 1746623409423.json"; 
import { useTheme } from "./ThemeContext";

const Loader = () => {
  const { theme } = useTheme();
  
  // Utiliser la même couleur que Vanta.js selon le thème
  const backgroundColor = theme === 'light' ? '#f8f9fa' : '#07192f';
  
  return (
    <div 
      className="flex items-center justify-center min-h-screen" 
      style={{ backgroundColor }}
    >
      <Lottie animationData={animationData} loop={true} style={{ width: 500, height: 500 }} />
    </div>
  );
};

export default Loader;
