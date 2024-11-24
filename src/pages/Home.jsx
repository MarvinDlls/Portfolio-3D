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
  const [lastX, setLastX] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isSmallMobile: false
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 768,
        isSmallMobile: window.innerWidth < 400
      });
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleTouchStart = (event) => {
    event.preventDefault();
    setTouchStartX(event.touches[0].clientX);
    setIsRotating(true);
  };

  const handleTouchMove = (event) => {
    if (!touchStartX) return;
    
    const touchX = event.touches[0].clientX;
    const deltaX = touchX - touchStartX;
    
    const sensitivity = screenSize.isSmallMobile ? 0.01 : 0.005;
    setRotationSpeed(deltaX * sensitivity);
    
    setTouchStartX(touchX);
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
    setIsRotating(false);
    setRotationSpeed(0);
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition, rotation;

    if (screenSize.isSmallMobile) {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    } else if (screenSize.isMobile) {
      screenScale = [0.6, 0.6, 0.6];
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
      rotation = [0.1, 4.7, 0];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (screenSize.isSmallMobile) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -1.5, 0];
    } else if (screenSize.isMobile) {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustCameraForScreenSize = () => {
    if (screenSize.isSmallMobile) {
      return { 
        fov: 75, 
        near: 0.1, 
        far: 1000, 
        position: [0, 0, 10] 
      };
    }
    return { near: 0.1, far: 1000 };
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const cameraSettings = adjustCameraForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className={`absolute ${
        screenSize.isSmallMobile ? 'top-20' : 'top-28'
      } left-0 right-0 z-10 flex items-center justify-center`}>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={cameraSettings}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'none' }} 
      >
        <Suspense fallback={<Loader />}>
          <directionalLight 
            position={[1, 1, 1]} 
            intensity={screenSize.isSmallMobile ? 1.5 : 2} 
          />
          <ambientLight 
            intensity={screenSize.isSmallMobile ? 0.4 : 0.5} 
          />
          <hemisphereLight 
            skyColor='#b1e1ff' 
            groundColor='#000000' 
            intensity={screenSize.isSmallMobile ? 0.8 : 1} 
          />
          
          <Bird />
          <Sky isRotating={isRotating} />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            rotationSpeed={rotationSpeed}
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
  );
};

export default Home;