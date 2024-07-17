import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/banner.css'; // CSS 파일 import

function IndexHeader() {
  const bannerContainer = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (bannerContainer.current) {
          let windowScrollTop = window.pageYOffset / 3;
          bannerContainer.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  const images = [
    { id: 1, src: '/img/hotkaido.jpg', alt: 'Banner 1', text: '홋카이도', link: '/hotels' },
    { id: 2, src: '/img/oosaka.jpg', alt: 'Banner 2', text: '오사카', link: '/hotels' },
    { id: 3, src: '/img/tokyo.jpg', alt: 'Banner 3', text: '도쿄', link: '/hotels' },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentBanner((prevBanner) => (prevBanner === images.length - 1 ? 0 : prevBanner + 1));
      }
    }, 2000); // 2초마다 슬라이드 전환

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <div 
        className="banner-container" 
        ref={bannerContainer} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`banner ${index === currentBanner ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}${image.src})`, 
              transition: 'opacity 0.5s ease-in-out' // 추가: 페이드 효과
            }}
          >
            <a href={image.link} className="banner-link">
              <div className="banner-overlay">
                <div className={`banner-text ${index === currentBanner ? 'active' : ''}`}>
                  <h2>{image.text}</h2>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default IndexHeader;