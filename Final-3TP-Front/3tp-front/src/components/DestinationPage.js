import React, { useState, useEffect } from 'react';
import './DestinationPage.css';

const DestinationPage = () => {
  // 도쿄 지역 정보 배열
  const tokyoDestinations = [
    {
      name: '도쿄 스카이트리',
      location: '1 Chome-1-2, Oshiage, Sumida, Tokyo, Japan',
      description: '도쿄 스카이트리는 현대 일본의 매력을 잘 보여주는 랜드마크에요. 지상에서 634m 위로 높이 솟아 있는 이 타워는 전 세계에서 가장 높은 구조물로 꼽히죠. 도쿄 스카이트리는 쇼핑몰, 아쿠아리움, 다양한 레스토랑, 기념품 상점이 있는 도쿄 스카이트리 타운에 자리하고 있어요.',
      image: 'img/스카이트리.jpg',
    },
    {
      name: '메이지 신궁',
      location: '도쿄도 시부야구 요요기카미조노초 1-1(〒151-8557)',
      description: '메이지진구는 현대 일본의 토대를 마련한 메이지 천황과 그의 아내 쇼켄 황태후를 기리기 위해 지어진 신사예요. 1920년에 지어졌지만 제2차 세계대전 중 파괴되고, 이후에 재건되었죠. 메이지진구는 약 708,200m²에 달하는 아름다운 숲에 위치하고 있는데요. 이 숲에는 일본 각지의 사람들이 기부한 다양한 나무가 심어져 있습니다.',
      image: 'img/메이지신궁.jpg',
    },
    {
      name: '롯폰기 힐스',
      location: '도쿄도 미나토구 롯폰기 6초메 11-1(〒106-6108)',
      description: '롯폰기 힐스는 주거용 아파트, 쇼핑, 레스토랑, 아트 갤러리, 사무 공간, TV 스튜디오, 정원, 공원과 영화관 및 박물관 등 다양한 엔터테인먼트 공간을 갖춘 대형 복합 단지에요.',
      image: 'img/롯폰기힐스.jpg',
    },
    {
      name: '센소지',
      location: '쿄도 다이토구 아사쿠사 2초메 3-1(〒111-0032)',
      description: '아사쿠사에 방문하신다면 유명한 불교 사찰인 센소지에 방문해 보세요. 아사쿠사 관음사라고도 불리는 이곳은 도쿄에서 가장 오래된 절인데요. 보는 순간 감탄이 절로 터져 나올 거예요. 센소지라고 하면 많은 관광객이 입구에 있는 거대한 가미나리문에 매달린 큰 등을 떠올리죠. 매년 3천 만명의 신자가 방문하는 것으로 추산되는 이곳은 대자비를 베푸는 보살인 관세음보살을 모시고 있어요.',
      image: 'img/센소지.jpg',
    },
    {
      name: '도쿄 타워',
      location: '도쿄도 미나토구 시바코엔 4초메 2-8(〒105-0011)',
      description: '도쿄 타워는 도쿄의 상징이라고 할 수 있는 유명한 랜드마크죠. 에펠탑을 본떠 설계한 도쿄타워는 관동 지역에 대규모 방송 송신탑이 필요했던 1958년에 완공되었어요. 외관은 에펠탑과 유사하지만 도쿄 타워가 13m 더 높아요. 지금도 송신탑으로 사용되고 있지요.',
      image: 'img/도쿄타워1.jpg',
    },
    {
      name: '도쿄 디즈니랜드',
      location: '지바현 우라야스 마이하마 1-1(〒279-0031)',
      description: '도쿄 디즈니랜드는 미국 외 지역에 지어진 최초의 디즈니랜드로, 1983년에 문을 열었어요. 여전히 가족, 연인, 모든 연령대의 사람들에게 큰 사랑을 받고 있는데요. 이곳은 6개 구역인 어드벤처랜드, 웨스턴랜드, 크리터 컨트리, 판타지랜드, 툰타운, 투 모로우랜드로 나뉘어 있죠.',
      image: 'img/디즈니랜드.jpg',
    },

    {
      name: '시부야 스카이',
      location: '도쿄도 시부야구 시부야 니쵸메 24번 12호',
      description: '시부야 스카이는 시부야 상공 229m에서 펼쳐지는 360도의 경치를 바라보는 것에 그치지 않고 일련의 체험을 통해 지적 호기심을 자극해 상상력을 키우는 전망장치입니다.',
      image: 'img/시부야스카이.jpg',
    },
    {
      name: '오다이바',
      location: '일본 〒135-0091 도쿄도 미나토구',
      description: '오다이바에는 일본에서 가장 큰 대관람차로 오바이바 전경을 볼 수 있는 팔레트 타운 쇼핑몰 옥상의 대관람차와 일본의 에도 시대의 서민 온천을 재현한 공간으로 유카타 체험도 해볼 수 있는 오오에도 온천 그리고 자유의 여신상이 있는 오바이바 해변공원까지 하루를 투자해도 모자를 정도로 재미난 곳들이 많아요.',
      image: 'img/오다이바.jpg',
    },
  ];

  // 오사카 지역 정보 배열
  const osakaDestinations = [
    {
      name: '오사카 성',
      location: '오사카부 오사카시 추오구 오사카조 1-1(〒540-0002)',
      description: '오사카성은 일본의 많은 옛 성들과 마찬가지로 역사의 풍파를 겪으며 여러 차례 손상되고 재건되었습니다. 현재는 일본에 남아 있는 가장 훌륭한 성 중 하나로 꼽히죠. 1583년에 세워진 오사카성은 1931년에 재건되어 지금의 모습을 갖추고 있는데요. 오사카의 전망을 한눈에 볼 수 있는 꼭대기 층에는 꼭 올라가 보세요. ',
      image: 'img/오사카.jpg',
    },
    {
      name: '도톤보리',
      location: '1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071 일본',
      description: '도톤보리는 오사카를 대표하는 가장 유명한 상업 지구예요. 상점, 레스토랑 및 엔터테인먼트 센터가 즐비해 있죠. 많은 관광객들이 밤에 이곳을 방문하는데요. 주로 맛집을 찾아오는 거예요. 도톤보리의 대형 네온 광고 표지판 앞은 인기 있는 포토 스팟인데요. 일본의 대형 과자 업체인 글리코의 마스코트 격인 유명한 글리코 맨 이나 다른 번쩍이는 광고 표지판 앞에서 사진을 남겨보세요.',
      image: 'img/도톤보리.jpg',
    },
    {
      name:'유니버셜 스튜디오 재팬',
      location:'오사카부 오사카시 고노하나구 사쿠라지마 2초메 1-33(〒554-0031)',
      description: '유니버설 스튜디오 재팬은 가족, 특히 어린아이들에게 큰 사랑을 받는 곳이에요. 스누피, 슈렉, 뽀빠이와 같은 유명한 캐릭터와 인사도 나누고 유명한 영화를 테마로 한 많은 재미있는 놀이기구도 탈 수 있죠. 그중에서 쥬라기 공원, 죠스, 스파이더 맨 테마의 놀이기구가 가장 인기가 높아요.',
      image: 'img/유니버셜.jpg',
    },
    {
      name:'덴포잔 대관람차',
      location:' 오사카부 오사카시 미나토구 카이간도리 1초메 1-10(〒052-0022)',
      description: '덴포잔 대관람차는 오사카 가이유칸 수족관과 동일한 회사가 운영하는 놀이기구예요. 덴포잔 하버 빌리지 근처에 자리해 있죠. 높이는 112.5m로, 한 바퀴를 모두 도는 데 약 15분이 걸립니다. 8명씩 탈 수 있는 캐빈 60개로 구성되어 있으며 휠체어를 탄 채로 이용할 수도 있어요, 덴포잔 대관람차를 타면 동쪽 이코마산, 서쪽 아카시 해협 대교, 남쪽 간사이 국제공항, 북쪽 롯코산맥 등 오사카만과 그 주변을 한눈에 조망할 수 있습니다.',
      image: 'img/덴포잔.jpg',


    },
    {
      name:'우메다 스카이 빌딩 공중정원 전망대',
      location:'오사카부 오사카시 기타구 오요도나카 1초메 1-8 7(〒531-6023)',
      description: '우메다 빌딩의 쌍둥이 타워 사이에 자리해 초현대적인 디자인을 자랑하는 공중정원 전망대에서는 멋진 도시 전경을 감상할 수 있어요. 39층에 있어 높이가 170m에 달하는 전망대에 서 있는 것만으로도 특별한 체험을 했다고 느낄 수 있는데요. 엘리베이터와 에스컬레이터도 전면이 투명해 전망대로 올라가면서 주변 경치를 360도로 조망할 수 있죠. ',
      image: 'img/우메다전망대.jpg',


    },
    {
      name:'오사카 가이유칸 수족관',
      location:'오사카부 오사카시 미나토구 카이간도리 1초메 1-10(〒552-0022)',
      description: '오사카 가이유칸 수족관은 세계에서 가장 큰 수족관 중 하나입니다. 고래상어, 바다사자와 펭귄, 해파리, 해달, 거북, 쥐가오리, 키다리게, 잔점박이 물범, 열대 암초까지 다양한 해양 생물을 만나보실 수 있어요. 수족관 탱크는 아크릴 유리판으로 제작되어 유유히 헤엄치는 해양 생물들과 함께 바다속에 있는 듯한 느낌이 들죠. 영어, 중국어, 한국어를 지원하는 오디오 가이드를 대여하실 수 있습니다. 사람이 많아 혼잡할 수 있으니 공휴일이나 주말을 피해 방문하는 걸 추천해 드려요.',
      image: 'img/가이유칸수족관.jpg',


    },
    {
      name:'시텐노지',
      location:'오사카부 오사카시 덴노지구 신텐노지(〒543-0051)',
      description: '일본에서 가장 오래된 사찰인 시텐노지는 오사카의 종교를 이야기할 때 빠지지 않는 곳이에요. 일본에 불교를 들여왔다고 알려진 쇼토쿠 태자가 593년에 세운 절인데요. 시대를 거치면서 나무로 지어진 시텐노지의 건물은 전쟁과 화재로 피해를 입었지만 그때마다 주민들이 정성을 들여 원래의 모습으로 복원했습니다. 가장 인기 있는 볼거리인 시텐노지의 정문과 5층짜리 불탑, 금당을 확인해 보세요.',
      image: 'img/시텐노지.jpg',


    },
    {
      name:'텐노지 동물원',
      location:'1-108 Chausuyamacho, Tennoji Ward, Osaka 543-0063, Japan',
      description: '1915년에 설립된 덴노지 동물원에는 200종의 동물 1,000여 마리가 살고 있어요. 110,000제곱미터 규모의 이 공원에는 전 세계의 자연 환경을 재현한 야생 동물 보호 구역이 있어요. 공원은 4개의 구역으로 구성되어 있고 펭귄, 기린, 코끼리 등 각 지역의 동물을 볼 수 있어요.',
      image: 'img/텐노지동물원.jpg',


    },
  ];

  // 홋카이도 지역 정보 배열
  const hokkaidoDestinations = [
    {
      name: '유노카와 온천',
      location: '北海道函館市湯川町',
      description: '유노카와 온천은 홋카이도의 대표적인 온천이다. 특히 유노카와 온천은 옆에 바로 바다 있어서 아름다운 풍경을 즐기면서 온천욕을 할 수 있기로 유명하다. 온천 거리에서 호텔과 료칸이 많이 있고 다양한 선택이 있다. 하코다테 야경을 구경한 후 유노카와에서 온천욕을 하면서 스트레스를 플린고 편하게 밤을 보내는 것이 좋다.',
      image: 'img/유노카와온천.jpg',
    },
    {
      name: '노보리베츠 지옥계곡',
      location: '北海道登別市登別温泉町無番地',
      description: '노보리베츠 지옥계곡은 화산의 활동으로 생긴 온천으로 알려져 있다. 이곳의 온천은 거품을 끓어오르는 모습이 마치 귀신이 사는 지옥처럼 지옥계곡이라고 불린다. 지옥계곡은 하루에 1만톤의 온천이 용출하고 온천거리의 호텔에서 온천욕을 즐길 수 있다. 게다가 화산 면적은 크니까 분기공도 많고 산책로에 안개가 피어오르고 있으니 정말 신기한 장면이다.',
      image: 'img/노보리베츠.jpg',
    },
    {
      name: '조잔케이 온천',
      location: '北海道札幌市南区定山渓温泉',
      description: '조잔케이 온천은 호텔과 온천 숙박이 있고 무료 족탕과 수탕도 있다. 이곳에서 다양한 온천을 즐길 수 있다. 근처에 있는 조잔 원천공원은 무료로 죽탕을 제공하여 매점에서 판매하는 계란을 사고 온천물에서 넣고 온천계란 직접 만들 수 있다. 이곳에 방문하면 꼭 체험해야 한다.',
      image: 'img/조잔케이.jpg',
    },
    {
      name: '오타루 운하 & 오르골당',
      location: '北海道小樽市港町５',
      description: '오타루는 항구도시로서 오타루 운하가 조성되었고 다른 운하와 달라 완만하게 구부러진 모습이 특징이다. 운하 양쪽에는 옛날식 창고과 공장이 많고 그 중에서 레스토랑이나 가게로 개조하고 사용하고 있는 곳도 있다. 오타루 예술마을(小樽芸術村), 오타루시 종합박물관 운하관(小樽市総合博物館 運河館) 등이 있어 오후에 시간 있으면 운하를 따라 산책하고 감상하는 것이 좋다',
      image: 'img/오타루.jpg',
    },
    {
      name: '오도리 공원',
      location: '北海道札幌市中央区大通西 ８〜９丁目',
      description: '오도리 공원은 수많은 빌딩 가운데 동서로 약 1.5 킬로미터에 걸친 공원이다. 공원 내에는 넓으니까 볼거리가 많고 관광객과 주민들이 이곳에서 산책하고 휴식한다. 오도리 공원은 서양 정원이 있고 나무과 꽃 등이 자연 경치를 감상할 수 있기뿐만 아니라 큰 분수가 여름밤에 빛과 음막에 따라하는 물의 퍼포먼스까지 볼 수 있다. 분수 옆에는 홋카이도산 인기 옥수수도 판매하니까 기회가 되면 먹어보자!',
      image: 'img/오도리공원.jpg',
    },
    {
      name: '비에이',
      location: '北海道上川郡美瑛町本町1丁目2-14',
      description: '비에이는 아름다운 자연 경치로 알려져 있다. 관광객들은 보통 자기 운전, 자전거와 택시 등이 교통 방식으로 각 관광지에 방문한다. 하지만 렌터카나 택시를 타고 싶지 않으면 비에이 버스 투어 예약하고 1일간 버스를 타기도 비에이의 경치를 감상할 수 있다.',
      image: 'img/비에이.jpg',
    },
    {
      name: '삿포로 맥주 박물관',
      location: '北海道東区北７条東９丁目１−1',
      description: '삿포로 맥주는 홋카이도에서 대표적인 맥주이고 삿포로 맥주 박물관이 일본에서 유일한 맥주 박물관이다. 맥주 박물관은 1987년에 설립되었고 삿포로 맥주에 관한 역사와 이야기를 전시하고 있다. 박물관 내에 숍이 있으며 한정 상품과 맥주를 판매한다. 맥주는 마셔보고 싶다면 유료 시음 센터도 설치되여 있다.',
      image: 'img/삿포로맥주.jpg',
    },
    {
      name: 'JR 타워 전망실',
      location: '일본 〒060-0005 Hokkaido, Sapporo, Chuo Ward, Kita 5 Jonishi, 2 Chome−5−番地 受付',
      description: '삿포로 시내 풍경을 한눈에 내려다 볼 수 있는, 삿포로 JR타워 38층에 자리한 전망시설이다. 삿포로 시내의 야경을 감상할 수 있는 저녁 시간에 특히 인기가 많은 곳으로, 전망대 내에 카페와 기념품 숍도 입점하고 있어 편리하게 이용할 수 있다.',
      image: 'img/타워전망대.jpg',
    },
    
  ];

  // 모든 지역 정보 배열
  const allDestinations = [...tokyoDestinations, ...osakaDestinations, ...hokkaidoDestinations];

  // 선택된 지역의 정보를 저장할 상태 변수
  const [selectedDestination, setSelectedDestination] = useState(null);

  // 페이지가 처음 로드될 때 랜덤으로 지역 선택
  useEffect(() => {
    handleRandomRecommendation();
  }, []);

  // 지역 선택 이벤트 핸들러
  const handleSelectDestination = (destinations) => {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    setSelectedDestination(destinations[randomIndex]);
  };

  // 랜덤으로 지역을 선택하는 함수
  const handleRandomRecommendation = () => {
    const destinations = allDestinations;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * destinations.length);
    } while (destinations[randomIndex] === selectedDestination); // 현재 선택된 지역과 겹치지 않도록

    setSelectedDestination(destinations[randomIndex]);
  };

  return (
    <div className="DestinationPage">
      <header className="App-header">
        <h1>일본 여행명소 추천</h1>
      </header>
      <main className="App-main">
        <div className="button-container">
          <button className="random-button" onClick={() => handleSelectDestination(tokyoDestinations)}>
            도쿄
          </button>
          <button className="random-button" onClick={() => handleSelectDestination(osakaDestinations)}>
            오사카
          </button>
          <button className="random-button" onClick={() => handleSelectDestination(hokkaidoDestinations)}>
            홋카이도
          </button>
        </div>
        {selectedDestination && (
          <div className="destination-container">
            <div className="destination">
              <img src={selectedDestination.image} alt={selectedDestination.name} />
              <h2>{selectedDestination.name}</h2>
              <h4>{selectedDestination.location}</h4>
              <p>{selectedDestination.description}</p>
            </div>
          </div>
        )}
        <button className="random-button" onClick={handleRandomRecommendation}>
          전체 랜덤명소 추천
        </button>
      </main>
    </div>
  );
};

export default DestinationPage;
