import React, { useState, useEffect } from 'react';
// styles
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "assets/demo/demo.css";
import ExamplesNavbar from './Navbars/ExamplesNavbar';
import DarkFooter from './Footers/DarkFooter';

import{
  Card,
  ListGroup,
  ListGroupItem
} from "reactstrap";





const Hotels = () => {
  const tokyoHotels = [ {
    name: '나리타 게이트웨이 호텔 (Narita Gateway Hotel)',
    location: '658 Oyama, Narita City, Chiba Pref., 나리타 국제공항, 나리타, 일본, 286-0131',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 나리타의 나리타 국제공항에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 나리타산 신쇼지을/를 방문해 보세요. 별 3개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 피트니스 센터 및 마사지을/를 제공합니다.모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 나리타의 나리타 국제공항에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 나리타산 신쇼지을/를 방문해 보세요. 별 3개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 피트니스 센터 및 마사지을/를 제공합니다.',
    image: 'img/나리타1.jpg'
    ,title: '나리타공항 주변 추천 호텔'
  },
  {
    name: '아트 호텔 나리타 (ART HOTEL Narita)',
    location: '700 Kosuge, Narita City, Chiba Pref. , 나리타 국제공항, 나리타, 일본, 286-0127',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 나리타의 나리타 국제공항에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 나리타산 신쇼지을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 스팀룸을/를 제공합니다.',
    image: 'img/나리타2.jpg' 
    ,title: '나리타공항 주변 추천 호텔'
  },
  {
    name: '호텔 닛코 나리타 (Hotel Nikko Narita)',
    location: '500 Tokko, Narita-shi, Chiba, 나리타 국제공항, 나리타, 일본, 286-0106',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 나리타의 나리타 국제공항에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 나리타산 신쇼지을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 실외 수영장 및 마사지을/를 제공합니다.',
    image: 'img/나리타3.jpg'
    ,title: '나리타공항 주변 추천 호텔' 
  },
  {
    name: '신주쿠 워싱턴 호텔 - 본관 (Shinjuku Washington Hotel - Main Building)',
    location: '3-2-9 Nishi-Shinjuku, Shinjuku-ku , 신주쿠, 도쿄 / 동경, 일본, 160-8336',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 나리타의 나리타 국제공항에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 나리타산 신쇼지을/를 방문해 보세요. 별 3개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 피트니스 센터 및 마사지을/를 제공합니다.모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 나리타의 나리타 국제공항에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 나리타산 신쇼지을/를 방문해 보세요. 별 3개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 피트니스 센터 및 마사지을/를 제공합니다.',
    image: 'img/신주쿠1.jpg'
    ,title: '신주쿠 주변 추천 호텔'
  },
  {
    name: '신주쿠 그랑벨 호텔 (Shinjuku Granbell Hotel)',
    location: '2-14-5 Kabuki Cho, 신주쿠, 도쿄 / 동경, 일본, 160-0021',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 신주쿠에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    image: 'img/신주쿠2.jpg' 
    ,title: '신주쿠 주변 추천 호텔'
  },
  {
    name: '호텔 그레이스리 신주쿠 (Hotel Gracery Shinjuku)',
    location: '1-19-1 Kabukicho, 신주쿠, 도쿄 / 동경, 일본, 160-8466 ',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 신주쿠에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 4성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/신주쿠3.jpg'
    ,title: '신주쿠 주변 추천 호텔' 
  },
  {
    name: '마루노우치 호텔 (Marunouchi Hotel)',
    location: '1-6-3 Marunouchi, Chiyoda-ku, 도쿄역, 도쿄 / 동경, 일본, 100-0005',
    description: '도쿄 / 동경의 도쿄역에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 본 4성급 숙소는 숙박의 질과 즐거움을 향상시키기 위한 숙소 내 다양한 편의시설로 가득 차 있습니다.',
    image: 'img/도쿄역1.jpg'
    ,title: '도쿄역 주변 추천 호텔'
  },
  {
    name: '미츠이 가든 호텔 쿄바시 / 도쿄 스테이션 (Mitsui Garden Hotel Kyobashi / Tokyo Station)',
    location: '1-3-6, Kyobashi, Chuo-ku, 도쿄역, 도쿄 / 동경, 일본, 104-0031',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 도쿄역에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 4성급 숙소는 숙박의 질과 즐거움을 향상시키기 위한 숙소 내 다양한 편의시설로 가득 차 있습니다.',
    image: 'img/도쿄역2.jpg' 
    ,title: '도쿄역 주변 추천 호텔'
  },
  {
    name: '더 도쿄 스테이션 호텔 (The Tokyo Station Hotel)',
    location: '1-9-1 Marunouchi, Chiyoda-ku, 도쿄역, 도쿄 / 동경, 일본, 100-0005',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 도쿄역에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 별 5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 피트니스 센터을/를 제공합니다.',
    image: 'img/도쿄역3.jpg'
    ,title: '도쿄역 주변 추천 호텔' 
  },
  {
    name: '시부야 스트림 호텔(SHIBUYA STREAM HOTEL)',
    location: '3-21-3, Shibuya, 시부야, 도쿄 / 동경, 일본, 150-0002',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 도쿄 / 동경의 시부야에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 피트니스 센터을/를 제공합니다',
    image: 'img/시부야1.jpg'
    ,title: '시부야 주변 추천 호텔'
  },
  {
    name: '시부야 그랑벨 호텔 (Shibuya Granbell Hotel',
    location: '15-17,Sakuragaoka-cho,Shibuya-ku, 시부야, 도쿄 / 동경, 일본, 150-0031',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 도쿄 / 동경의 시부야에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 3.5성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/시부야2.jpg' 
    ,title: '시부야 주변 추천 호텔'
  },
  {
    name: '호텔 인디고 시부야(Hotel Indigo Tokyo Shibuya)',
    location: '2 Chome-25-12 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan, 시부야, 도쿄 / 동경, 일본, 150-0043',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 시부야에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 4.5성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/시부야3.jpg'
    ,title: '시부야 주변 추천 호텔' 
  },
  {
    name: '다이와 로이넷 호텔 긴자 프리미어 (Daiwa Roynet Hotel Ginza PREMIER)',
    location: 'Ginza 1-13-15, Chuo-ku, 긴자, 도쿄 / 동경, 일본, 104-0061',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 긴자에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    image: 'img/긴자1.jpg'
    ,title: '긴자 주변 추천 호텔'
  },
  {
    name: '밀레니엄 미츠이 가든 호텔 도쿄 / 긴자 (Millennium Mitsui Garden Hotel Tokyo / Ginza)',
    location: '5-11-1 Ginza, Chuo-Ku, 긴자, 도쿄 / 동경, 일본, 104-0061',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 긴자에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    image: 'img/긴자2.jpg' 
    ,title: '긴자 주변 추천 호텔'
  },
  {
    name: '호텔 그랜드 바흐 도쿄 긴자 (Hotel Grand Bach Tokyo Ginza)',
    location: '銀座5丁目13, 긴자, 도쿄 / 동경, 일본, 104-0061',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 긴자에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 4성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/긴자3.jpg'
    ,title: '긴자 주변 추천 호텔' 
  },
  {
    name: '렘 롯폰기 (remm Roppongi)',
    location: '7-14-4 Roppongi, Minato-ku, 롯폰기, 도쿄 / 동경, 일본, 106-0032',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 롯폰기에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 4성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/롯폰기1.jpg'
    ,title: '롯폰기 주변 추천 호텔'
  },
  {
    name: '칸데오 호텔 도쿄 롯폰기 (Candeo Hotels Tokyo Roppongi)',
    location: '6-7-11 Roppongi, Minato-ku, 롯폰기, 도쿄 / 동경, 일본, 106-0032',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 롯폰기에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 스팀룸 및 스파을/를 제공합니다.',
    image: 'img/롯폰기2.jpg' 
    ,title: '롯폰기 주변 추천 호텔'
  },
  {
    name: 'APA 호텔 롯폰기 식스 (APA Hotel Roppongi SIX)',
    location: '2-3-11 Roppongi, Minato-ku, 롯폰기, 도쿄 / 동경, 일본, 106-0032',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 롯폰기에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 센소지 사원을/를 방문해 보세요. 본 3성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/롯폰기3.jpg'
    ,title: '롯폰기 주변 추천 호텔' 
  },];
  const osakaHotels = [ {
    name: '소테츠 그랜드 프레사 오사카 난바 (Sotetsu Grand Fresa Osaka Namba)',
    location: '1-1-13, Nippombashi, Chuo-ku, 난바, 오사카, 일본, 542-0073 ',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 난바에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 본 3.5성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/난바1.jpg'
    ,title: '난바 주변 추천 호텔'
  },
  {
    name: '난바 오리엔탈 호텔 (Namba Oriental Hotel)',
    location: '2-8-17, Sennichimae, Chuo-ku, 난바, 오사카, 일본, 542-0074',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 난바에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 본 4성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/난바2.jpg' 
    ,title: '난바 주변 추천 호텔'
  },
  {
    name: '호텔 케이한 난바 그란데 (Hotel Keihan Namba Grande)',
    location: '2-11-13, Nanbanaka, Naniwa Ward, , 난바, 오사카, 일본, 556-0011',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 난바에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 피트니스 센터을/를 제공합니다.',
    image: 'img/난바3.jpg'
    ,title: '난바 주변 추천 호텔' 
  },
  {
    name: '호텔 한큐 리스파이어 오사카 (Hotel Hankyu RESPIRE OSAKA)',
    location: '1-1 Ofukacho, 우메다, 오사카, 일본, 5300011',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 우메다에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 별 4.5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 피트니스 센터을/를 제공합니다.',
    image: 'img/우메다1.jpg'
    ,title: '우메다 주변 추천 호텔'
  },
  {
    name: '호텔 비스키오 오사카 바이 그랑비아 (HOTEL VISCHIO OSAKA by GRANVIA)',
    location: '2-4-10 Shibata, Kita, 우메다, 오사카, 일본, 530-0012',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 우메다에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 본 4성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/우메다2.jpg' 
    ,title: '우메다 주변 추천 호텔'
  },
  {
    name: '호텔 브라이튼 시티 오사카 기타하마 (Hotel Brighton City Osaka Kitahama)',
    location: '1 Chome-1 Fushimimachi, Chuo, Osaka, Osaka Prefecture, 우메다, 오사카, 일본, 541-0044',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 우메다에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    image: 'img/우메다3.jpg'
    ,title: '우메다 주변 추천 호텔' 
  },
  {
    name: '호텔 닛코 오사카 (Hotel Nikko Osaka)',
    location: '1-3-3,Nishi-Shinsaibashi,Chuo-ku, 신사이바시, 오사카, 일본, 542-0086 ',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 신사이바시에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 별 4.5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    image: 'img/신사이바시1.jpg'
    ,title: '신사이바시 주변 추천 호텔'
  },
  {
    name: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 신사이바시에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 별 4.5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    location: '1-12-23, Higashishinsaibashi, Chuo-ku, 신사이바시, 오사카, 일본, 542-0083',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 신사이바시에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 본 3성급 숙소는 숙박의 질과 즐거움을 향상시키기 위한 숙소 내 다양한 편의시설로 가득 차 있습니다.',
    image: 'img/신사이바시2.jpg' 
    ,title: '신사이바시 주변 추천 호텔'
  },
  {
    name: '하톤 호텔 신사이바시 (Hearton Hotel Shinsaibashi)',
    location: 'Nishi Shinsaibashi, 1-5-24, Chuo Ku, 신사이바시, 오사카, 일본, 542-0086',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 신사이바시에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 도톤보리을/를 방문해 보세요. 본 3.5성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 레스토랑을/를 갖추고 있습니다.',
    image: 'img/신사이바시3.jpg',
    title: '신사이바시 주변 추천 호텔' ,
  },];
  const hokkaidoHotels = [ {
    name: '미츠이 가든 호텔 삿포로 (Mitsui Garden Hotel Sapporo)',
    location: '6-18-3 Kitagojo-nishi, Chuo-ku, 삿포로, 삿포로, 일본, 060-0005',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 삿포로에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 오도리 파크을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 스파 및 마사지을/를 제공합니다.',
    image: 'img/삿포로1.jpg'
    ,title: '삿포로 주변 추천 호텔'
  },
  {
    name: '그랑벨 호텔 스스키노 (GRANBELL HOTEL SUSUKINO)',
    location: '2-6-2 Minami5-jonishi Chuo-ku, 삿포로, 삿포로, 일본, 0640805 ',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 삿포로에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 오도리 파크을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 스팀룸 및 피트니스 센터을/를 제공합니다.',
    image: 'img/삿포로2.jpg' 
    ,title: '삿포로 주변 추천 호텔'
  },
  {
    name: '삿포로 스트림 호텔 (SAPPORO STREAM HOTEL)',
    location: '4-1 Minami 4 Jonishi,Chuo Ward,Sapporo,Hokkaido,064-0804 , 삿포로, 삿포로, 일본, 064-0804',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 삿포로에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 오도리 파크을/를 방문해 보세요. 더불어 투숙객 요구를 편리하게 충족시킬 수 있도록 숙소 내 레스토랑을/를 제공합니다.',
    image: 'img/삿포로3.jpg'
    ,title: '삿포로 주변 추천 호텔' 
  },{
    name: '도미 인 프리미움 오타루 핫 스프링 (Dormy Inn Premium Otaru Natural Hot Spring)',
    location: '3-9-1, Inaho,, 오타루, 오타루, 일본',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 오타루에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 JR 오타루 역을/를 방문해 보세요. 별 3.5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 스팀룸을/를 제공합니다.',
    image: 'img/오타루1.jpg'
    ,title: '오타루 주변 추천 호텔'
  },
  {
    name: '그리드 프리미엄 호텔 오타루 (GRIDS PREMIUM HOTEL OTARU)',
    location: 'Inaho, 1丁目3-13, 오타루, 오타루, 일본, 047-0032',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 오타루에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 JR 오타루 역을/를 방문해 보세요. 본 4성급 숙소는 보다 훌륭하고 기억에 남는 숙박을 제공하기 위해 스팀룸을/를 갖추고 있습니다.',
    image: 'img/오타루2.jpg' 
    ,title: '오타루 주변 추천 호텔'
  },
  {
    name: '호텔 노드 오타루 (Hotel Nord Otaru)',
    location: '1-4-16,Ironai, 오타루, 오타루, 일본, 047-0031',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 오타루에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 JR 오타루 역을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑 및 마사지을/를 제공합니다.',
    image: 'img/오타루3.jpg'
    ,title: '오타루 주변 추천 호텔' 
  },{
    name: '라젠트 스테이 하코다테 에키마에 (La gent Stay Hakodate Ekimae)',
    location: '12-8 Wakamatsucho, 하코다테, 하코다테, 일본, 040-0063',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 하코다테에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 하코다테 산을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 스팀룸을/를 제공합니다.',
    image: 'img/하코다테1.jpg'
    ,title: '하코다테 주변 추천 호텔'
  },
  {
    name: '라 비스타 하코다테 베이 (La Vista Hakodate Bay)',
    location: '12-6 Toyokawa-cho, 하코다테, 하코다테, 일본, 040-0065',
    description: '모든 객실 내 무료 Wi-Fi이/가 제공되는 이 숙소에서 즐거운 여행을 시작하세요. 하코다테에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 하코다테 산을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 스파을/를 제공합니다.',
    image: 'img/하코다테2.jpg' 
    ,title: '하코다테 주변 추천 호텔'
  },
  {
    name: '패브 호텔 하코다테 (FAV HOTEL HAKODATE)',
    location: 'otemachi20-15, 하코다테, 하코다테, 일본, 040-0064',
    description: '주차 및 Wi-Fi가 항상 무료로 제공되므로 언제든지 차량을 입출차할 수 있으며 연락을 취하실 수 있습니다. 하코다테에 위치해 있어 현지 명소 및 관광지와 인접해 있습니다. 떠나기 전 유명한 하코다테 산을/를 방문해 보세요. 본 5성급 숙소는 숙박의 질과 즐거움을 향상시키기 위한 숙소 내 다양한 편의시설로 가득 차 있습니다.',
    image: 'img/하코다테3.jpg'
    ,title: '하코다테 주변 추천 호텔' 
  },{
    name: '호텔 네이처왈드 후라노 (Hotel Naturwald Furano)',
    location: '14-46 Kitanominecho, 후라노, 후라노, 일본, 076-0034',
    description: '주차 및 Wi-Fi가 항상 무료로 제공되므로 언제든지 차량을 입출차할 수 있으며 연락을 취하실 수 있습니다. 후라노의 후라노에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 시로가네 청의 호수을/를 방문해 보세요. 별 3.5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 스파 및 온수 욕조을/를 제공합니다.',
    image: 'img/후라노1.jpg'
    ,title: '후라노 주변 추천 호텔'
  },
  {
    name: '라 비스타 후라노 힐스 내추럴 핫 스프링 (La Vista Furano Hills Natural Hot Spring)',
    location: '5-14 Asahimachi, 후라노, 후라노, 일본, 076-0026',
    description: '주차 및 Wi-Fi가 항상 무료로 제공되므로 언제든지 차량을 입출차할 수 있으며 연락을 취하실 수 있습니다. 후라노의 후라노에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 시로가네 청의 호수을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 스팀룸을/를 제공합니다.',
    image: 'img/후라노2.jpg' 
    ,title: '후라노 주변 추천 호텔'
  },
  {
    name: '신 후라노 프린스 호텔(Shin Furano Prince Hotel)',
    location: 'Nakagoryo, 후라노, 후라노, 일본, 076-8511',
    description: '주차 및 Wi-Fi가 항상 무료로 제공되므로 언제든지 차량을 입출차할 수 있으며 연락을 취하실 수 있습니다. 후라노의 후라노에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 시로가네 청의 호수을/를 방문해 보세요. 별 4개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 스팀룸을/를 제공합니다.',
    image: 'img/후라노3.jpg'
    ,title: '후라노 주변 추천 호텔' 
  },
];

const [showTokyo, setShowTokyo] = useState(false);
const [showOsaka, setShowOsaka] = useState(false);
const [showHokkaido, setShowHokkaido] = useState(false);
const [hotels, setHotels] = useState([]);

const toggleTokyo = () => {
  setShowTokyo(!showTokyo);
  setShowOsaka(false);
  setShowHokkaido(false);
};

const toggleOsaka = () => {
  setShowOsaka(!showOsaka);
  setShowTokyo(false);
  setShowHokkaido(false);
};

const toggleHokkaido = () => {
  setShowHokkaido(!showHokkaido);
  setShowTokyo(false);
  setShowOsaka(false);
};

const uniqueTitles = new Set();

const scrollToAccommodation = (index, region) => {
  let startIndex = 0;
  if (region === 'tokyo') {
    startIndex = 0;
  } else if (region === 'osaka') {
    startIndex = tokyoHotels.length;
  } else if (region === 'hokkaido') {
    startIndex = tokyoHotels.length + osakaHotels.length;
  }
  const realIndex = startIndex + index;
  const accommodationRef = document.getElementById(`accommodation-${realIndex}`);
  if (accommodationRef) {
    accommodationRef.scrollIntoView({ behavior: 'smooth' });
  }
};

const renderUniqueTitleLinks = (hotels, region) => {
  return hotels.map((hotel, index) => {
    if (!uniqueTitles.has(hotel.title)) {
      uniqueTitles.add(hotel.title);
      return (
        <a
          key={index}
          href="#"
          className={`fixed-button ${region === 'tokyo' && showTokyo ? 'active' : ''} ${region === 'osaka' && showOsaka ? 'active' : ''} ${region === 'hokkaido' && showHokkaido ? 'active' : ''}`}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: '10px',
            padding: '10px 0',
            backgroundColor: 'transparent',
            color: region === 'tokyo' && showTokyo
              ? '#00BFFF'
              : region === 'osaka' && showOsaka
              ? '#00BFFF'
              : region === 'hokkaido' && showHokkaido
              ? '#00BFFF'
              : '#4CAF50',
            cursor: 'pointer',
            fontSize: '16px',
            textDecoration: 'none',
            textAlign: 'left',
            lineHeight: '40px',
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToAccommodation(index, region);
          }}
        >
          {hotel.title}
        </a>
      );
    }
    return null;
  });
};

const handleRandomRecommendation = () => {
  const randomIndex = Math.floor(Math.random() * hotels.length);
  scrollToAccommodation(randomIndex);
};

const Accommodation = ({ hotel, index }) => {
  return (
    <div className="accommodation" style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box', maxWidth: '1000px' }}>
      {hotel.image && (
        <img
          src={process.env.PUBLIC_URL + '/' + hotel.image}
          alt={`${hotel.name} 이미지`}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <div className="accommodation-details" style={{ marginTop: '20px' }}>
        <h3 style={{ marginBottom: '5px' }}>{hotel.name}</h3>
        <h4 style={{ marginBottom: '5px' }}>{hotel.location}</h4>
        <p style={{ marginBottom: '5px' }}>{hotel.description}</p>
      </div>
    </div>
  );
};

useEffect(() => {
  setHotels([...tokyoHotels, ...osakaHotels, ...hokkaidoHotels]);
}, [tokyoHotels, osakaHotels, hokkaidoHotels]);

return (
  <>
    <ExamplesNavbar />

    
    <div className="HotelsPage" style={{ display: "flex", marginTop: "60px" }}>
        <div
          className="button-container"
          style={{
            position: "sticky",
            top: "280px", // 더 아래로 내리기 위해 조정
            width: "20rem",
            height: "calc(100vh - 100px)", // 전체 높이에서 더 아래로 내린 만큼 줄이기
            padding: "20px",
            backgroundColor: "#f8f8f8",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "20px",
            zIndex: "1000",
          }}
        >
          <Card style={{ width: "100%" }}>
            <ListGroup flush>
              <ListGroupItem
                tag="button"
                action
                style={{
                  cursor: "pointer",
                  backgroundColor: "#f8f8f8",
                  color: showTokyo ? "#00BFFF" : "#4CAF50",
                  marginBottom: "20px",
                  padding: "15px 0",
                  border: "none",
                  textAlign: "left",
                  position: "relative",
                  fontSize: "1.2rem", // 글자 크기 설정
                }}
                onClick={toggleTokyo}
              >
                도쿄
                <span
                  style={{
                    content: "",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: showTokyo ? "6px solid #00BFFF" : "6px solid #4CAF50",
                  }}
                />
              </ListGroupItem>
              {showTokyo && renderUniqueTitleLinks(tokyoHotels, "tokyo")}

              <ListGroupItem
                tag="button"
                action
                style={{
                  cursor: "pointer",
                  backgroundColor: "#f8f8f8",
                  color: showOsaka ? "#00BFFF" : "#4CAF50",
                  marginBottom: "20px",
                  padding: "15px 0",
                  border: "none",
                  textAlign: "left",
                  position: "relative",
                  fontSize: "1.2rem", // 글자 크기 설정
                }}
                onClick={toggleOsaka}
              >
                오사카
                <span
                  style={{
                    content: "",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: showOsaka ? "6px solid #00BFFF" : "6px solid #4CAF50",
                  }}
                />
              </ListGroupItem>
              {showOsaka && renderUniqueTitleLinks(osakaHotels, "osaka")}

              <ListGroupItem
                tag="button"
                action
                style={{
                  cursor: "pointer",
                  backgroundColor: "#f8f8f8",
                  color: showHokkaido ? "#00BFFF" : "#4CAF50",
                  marginBottom: "20px",
                  padding: "15px 0",
                  border: "none",
                  textAlign: "left",
                  position: "relative",
                  fontSize: "1.2rem", // 글자 크기 설정
                }}
                onClick={toggleHokkaido}
              >
                홋카이도
                <span
                  style={{
                    content: "",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: showHokkaido ? "6px solid #00BFFF" : "6px solid #4CAF50",
                  }}
                />
              </ListGroupItem>
              {showHokkaido && renderUniqueTitleLinks(hokkaidoHotels, "hokkaido")}

              <ListGroupItem
                tag="button"
                action
                style={{
                  cursor: "pointer",
                  backgroundColor: "#f8f8f8",
                  color: "#4CAF50",
                  marginBottom: "20px",
                  padding: "15px 0",
                  border: "none",
                  textAlign: "left",
                  position: "relative",
                  fontSize: "1.2rem", // 글자 크기 설정
                }}
                onClick={handleRandomRecommendation}
              >
                랜덤 호텔 추천
                <span
                  style={{
                    content: "",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "6px solid #4CAF50",
                  }}
                />
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>

        <div
          className="sidebar-border"
          style={{
            position: "fixed",
            top: "0",
            left: "20rem",
            height: "100%",
            borderRight: "1px solid #ddd",
          }}
        />

        <main className="App-main" style={{ marginLeft: "10rem", padding: "20px", width: "calc(100% - 21rem)", marginTop: "60px" }}>
          <div className="accommodation-list">
            {hotels.map((hotel, index) => (
              <div key={index} id={`accommodation-${index}`} className="accommodation-item">
                <Accommodation hotel={hotel} index={index} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Hotels;