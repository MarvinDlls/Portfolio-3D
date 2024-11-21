import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Fonction pour détecter la taille de l'écran
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifie la taille initiale de l'écran
    checkScreenSize();

    // Ajoute un écouteur pour les changements de taille d'écran
    window.addEventListener('resize', checkScreenSize);

    // Nettoie l'écouteur lors du démontage du composant
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const adjustIslandandForScreenSize = () => {
    let screenScale, screenPosition, rotation;

    if (isMobile) {
      screenScale = [0.6, 0.6, 0.6]; // Échelle réduite pour mobile
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (isMobile) {
      screenScale = [1.2, 1.2, 1.2]; // Échelle ajustée pour mobile
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> 

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`} 
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
          
          <Bird />
          <Sky isRotating={isRotating} />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}      
            setCurrentStage={setCurrentStage}   
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>    
    </section>
  )
}

export default Home