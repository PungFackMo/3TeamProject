import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col} from "reactstrap";

// core components

function Download() {
  const imageData = [
    {
      label: "Image 1",
      alt: "image1",
      url: "/img/디즈니랜드.jpg",
    },
  
    {
      label: "Image 2",
      alt: "image2",
      url: "/img/가이유칸수족관.jpg",
    },
  
    {
      label: "Image 3",
      alt: "image3",
      url: "/img/덴포잔.jpg",
    },
  
    {
      label: "Image 4",
      alt: "image4",
      url: "/img/유니버셜.jpg",
    },
  
    {
      label: "Image 5",
      alt: "image5",
      url: "/img/오사카.jpg",
    },
  ];

  const renderSlides = imageData.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
  ));

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            selectedItem={imageData[currentIndex]}
            onChange={handleChange}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="arrow-styles" style={{ left: 15 }}>
                  &lt;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="arrow-styles" style={{ right: 15 }}>
                  &gt;
                </button>
              )
            }
            >
            {renderSlides}
          </Carousel>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">역사적 명소에서부터 낭만적인 장소, 
                <br />독특한 핫플레이스를 소개합니다.</h3>
              <h5 className="description">
              전 세계에서 가장 재미있는 나라 중 하나인 일본에서는 하루만에 현대와 과거의 매력을 <br />
              느끼실 수 있습니다. 일본의 전통문화와 현대적이고 독창적인 분위기가 많은 <br />
              사람들의 발길을 이끌죠. 일본에서 재미있는 여행을 떠나보세요.
              </h5>
            </Col>
            <Col className="text-center" lg="12" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                to="/DestinationPage"
                tag={Link}
                role="button"
                size="lg"
                >
                일본 관광지 추천 받으러 가기
              </Button>
              <Button
                className="btn-round mr-1"
                color="primary"
                to="/Hotels"
                tag={Link}
                outline
                role="button"
                size="lg"
                >
                관광지 근처 호텔 추천 받으러 가기
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
