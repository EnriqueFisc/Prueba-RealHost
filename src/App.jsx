import { Canvas } from "@react-three/fiber";
import "./App.css";
import { BarnTesting } from "./components/model/Barn_Testing";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { CanvasContainer } from "./components/canvasContainer/CanvasContainer";

function App() {
  return (
    <CanvasContainer>
      {(wall) => (
        <Canvas camera={{ zoom: 15, position: [40, 80, 40] }}>
          <OrbitControls autoRotate autoRotateSpeed={0.5} />
          <ambientLight />
          <pointLight position={[50, 50, 30]} intensity={0.5} />
          <pointLight position={[-50, -50, -40]} intensity={0.5} />
          <Stars
            radius={100}
            depth={50}
            count={50000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          <Suspense fallback={null}>
            <BarnTesting wall={wall} />
          </Suspense>
        </Canvas>
      )}
    </CanvasContainer>
  );
}

export default App;
