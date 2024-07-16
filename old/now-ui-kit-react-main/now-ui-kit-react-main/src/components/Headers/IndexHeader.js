import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import 'assets/css/banner.css'; // CSS 파일 import

function IndexHeader() {
  const sliderContainer = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (sliderContainer.current) {
          let windowScrollTop = window.pageYOffset / 3;
          sliderContainer.current.style.transform =
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
    { id: 1, src: '/img/hotkaido.jpg', alt: 'Slide 1', text: '홋카이도', link: '/page1' },
    { id: 2, src: '/img/oosaka.jpg', alt: 'Slide 2', text: '오사카', link: '/page2' },
    { id: 3, src: '/img/tokyo.jpg', alt: 'Slide 3', text: '도쿄', link: '/page3' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }
    }, 1000); // 1초마다 슬라이드 전환

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
        className="slider-container" 
        ref={sliderContainer} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}${image.src})`, 
              transition: 'opacity 0.5s ease-in-out' // 추가: 페이드 효과
            }}
          >
            <a href={image.link} className="slide-link">
              <div className="slide-overlay">
                <div className={`slide-text ${index === currentSlide ? 'active' : ''}`}>
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