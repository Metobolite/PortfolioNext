"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import catPhoto from './photos/cat.png';

const Cat: React.FC = () => {
  const catRef = useRef<HTMLDivElement | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const getRandomDirection = () => {
    const directions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const moveCat = (distance = 0, speed = 2000) => {
    const cat = catRef.current;
    const container = document.querySelector('.container-app') as HTMLElement;

    if (!cat || !container) return;

    const containerRect = container.getBoundingClientRect();
    const catWidth = cat.offsetWidth || 0;
    const catHeight = cat.offsetHeight || 0;

    const maxX = containerRect.width - catWidth;
    const maxY = containerRect.height - catHeight;

    let randomX = 0;
    let randomY = 0;

    switch (getRandomDirection()) {
      case 'top-left':
        randomX = Math.random() * (maxX / 2) + distance;
        randomY = Math.random() * (maxY / 2) + distance;
        break;
      case 'top-right':
        randomX = Math.random() * (maxX / 2) + (maxX / 2 - distance);
        randomY = Math.random() * (maxY / 2) + distance;
        break;
      case 'bottom-left':
        randomX = Math.random() * (maxX / 2) + distance;
        randomY = Math.random() * (maxY / 2) + (maxY / 2 - distance);
        break;
      case 'bottom-right':
        randomX = Math.random() * (maxX / 2) + (maxX / 2 - distance);
        randomY = Math.random() * (maxY / 2) + (maxY / 2 - distance);
        break;
    }

    randomX = Math.max(0, Math.min(maxX, randomX));
    randomY = Math.max(0, Math.min(maxY, randomY));

    cat.style.transition = `transform ${speed}ms ease`;
    cat.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => moveCat(0, 2000), 2000); 
  
    return () => clearInterval(intervalId); 
  }, [moveCat]); 

  const handleMouseEnter = () => {
    moveCat(100, 1000);
  };

  const handleClick = () => {
    moveCat(250, 1000); 
    setNotification("Don't Touch!");

    setTimeout(() => {
      setNotification(null);
    }, 1500);
  };

  return (
    <div
      ref={catRef}
      style={{ position: 'absolute', zIndex: 1, width: '100px', height: '100px' }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <Image
        src={catPhoto}
        alt="Minik Kedi"
        width={100}
        height={100}
        quality={50}
        priority
      />
      {notification && <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', padding: '5px', borderRadius: '3px' }}>{notification}</div>}
    </div>
  );
};

export default Cat;