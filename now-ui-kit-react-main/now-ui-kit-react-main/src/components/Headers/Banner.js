import React from 'react';
import 'assets/css/banner.css'; // CSS 파일 import

const Banner = () => {
  return (
    <div className="banner-container">
      {/* 첫 번째 배너 섹션 */}
      <div className="banner-section">
        <a href="/page1" className="banner-link">
          <img src="assets/img/header.jpg" alt="Banner 1" className="banner-image" />
          <div className="banner-overlay">
            <div className="banner-text">
              <h2>첫 번째 배너</h2>
              <p>첫 번째 배너 설명 텍스트</p>
            </div>
          </div>
        </a>
      </div>

      {/* 두 번째 배너 섹션 */}
      <div className="banner-section">
        <a href="/page2" className="banner-link">
          <img src="assets/img/header.jpg" alt="Banner 2" className="banner-image" />
          <div className="banner-overlay">
            <div className="banner-text">
              <h2>두 번째 배너</h2>
              <p>두 번째 배너 설명 텍스트</p>
            </div>
          </div>
        </a>
      </div>

      {/* 세 번째 배너 섹션 */}
      <div className="banner-section">
        <a href="/page3" className="banner-link">
          <img src="assets/img/header.jpg" alt="Banner 3" className="banner-image" />
          <div className="banner-overlay">
            <div className="banner-text">
              <h2>세 번째 배너</h2>
              <p>세 번째 배너 설명 텍스트</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Banner;