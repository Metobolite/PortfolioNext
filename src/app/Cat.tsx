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
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const footer = document.querySelector('.footerAll') as HTMLElement;
  
    if (!cat || !navbar || !footer) return;
  
    const navbarHeight = navbar.offsetHeight || 0;
    const footerHeight = footer.offsetHeight || 0;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
  
    const maxX = windowWidth - (cat.offsetWidth || 0);
    const maxY = windowHeight - navbarHeight - footerHeight - (cat.offsetHeight || 0);
  
    // Varsayılan değerler
    let randomX = 0;
    let randomY = 0;
  
    switch (getRandomDirection()) {
      case 'top-left':
        randomX = Math.random() * (maxX / 2) + distance;
        randomY = navbarHeight + Math.random() * (maxY / 2) + distance;
        break;
      case 'top-right':
        randomX = Math.random() * (maxX / 2) + (windowWidth / 2 - (cat.offsetWidth || 0) - distance);
        randomY = navbarHeight + Math.random() * (maxY / 2) + distance;
        break;
      case 'bottom-left':
        randomX = Math.random() * (maxX / 2) + distance;
        randomY = Math.random() * (maxY / 2) + (windowHeight / 2 - (cat.offsetHeight || 0) - distance);
        break;
      case 'bottom-right':
        randomX = Math.random() * (maxX / 2) + (windowWidth / 2 - (cat.offsetWidth || 0) - distance);
        randomY = Math.random() * (maxY / 2) + (windowHeight / 2 - (cat.offsetHeight || 0) - distance);
        break;
    }
  
    // Konumu görünür alan içinde sınırlayın
    randomX = Math.max(0, Math.min(maxX, randomX));
    randomY = Math.max(navbarHeight, Math.min(maxY + navbarHeight, randomY));
  
    cat.style.transition = `transform ${speed}ms ease`;
    cat.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => moveCat(0, 2000), 2000); // Genel hareket için 2 saniye
  
    return () => clearInterval(intervalId); // Temizleme
  }, [moveCat]); // moveCat bağımlılık dizisine eklendi

  const handleMouseEnter = () => {
    moveCat(100, 1000); // Fare üzerine geldiğinde 1 saniye sürede hızlı hareket ettir
  };

  const handleClick = () => {
    moveCat(150, 1000); // Tıklandığında 1 saniye sürede hızlı hareket ettir
    setNotification('Dokunma!'); // Bildirim ekle

    // 1.5 saniye sonra bildirim mesajını temizle
    setTimeout(() => {
      setNotification(null);
    }, 1500);
  };

  return (
    <div
      ref={catRef}
      style={{ position: 'absolute', width: '100px', height: '100px' }}
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
      {notification && <div style={{ position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', padding: '5px', borderRadius: '3px' }}>{notification}</div>}
    </div>
  );
};

export default Cat;