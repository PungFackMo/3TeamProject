import React from "react";
import { Link , BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import DestinationPage from "components/DestinationPage";
import Hotels from "components/Hotels";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">역사적 명소에서부터 낭만적인 장소, 독특한 핫플레이스에 이르기까지 도쿄를 소개합니다.</h3>
              <h5 className="description">
              전 세계에서 가장 재미있는 도시 중 하나인 도쿄에서는 하루만에 현대와 과거의 매력을 느끼실 수 있습니다. 도쿄의 전통문화와 현대적이고 독창적인 분위기가 많은 사람들의 발길을 이끌죠. 도쿄에는 재미있는 관광명소가 많은데요. 비용이 많이 들지 않는 곳도 있습니다.
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
                도쿄 관광지 추천 받으러 가기
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
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">여러가지 오사카의 매력 속으로 떠나보자!</h3>
              <h5 className="description">
              일본 오사카는 일 년 내내 날씨가 좋아 언제 방문해도 좋은 여행지에요. 유니버설 스튜디오 재팬, 오사카 가이유칸 수족관 등 누구나 좋아하는 도시 명소부터 오사카 성, 도톤보리 등 깊은 역사를 지닌 곳들이 많아요. 오사카에서 꼭 가봐야 할 여행 명소와 계절별 여행 포인트를 알아보아요!
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
                오사카 관광지 추천 받으러 가기
              </Button>
              <Button
                className="btn-round"
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
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title"> 일본 최북부, 낭만과 여행 장소로도 인기가 높은 홋카이도</h3>
              <h5 className="description">
                사람들로 가득 찬 관광지, 이러한 여행이 질려 조용하고 아름다운 자연 속에서 힐링 여행을 즐기고 싶을 때는 홋카이도가 제격이다. 일본 최북단에 위치하여 평균 기온이 20도 안팎으로 한국보다 선선한 날씨로 쾌적한 여행을 즐길 수 있기 때문이다. 게다가 일본 내에서도 자연환경이 아름답기로 소문난 지역이 많습니다.
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
                홋카이도 관광지 추천 받으러 가기
              </Button>
              <Button
                className="btn-round"
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
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>어디를 갈지 모르겠나요?</h2>
              <h5 className="description">
                선택을 못하는 당신! 당신을 위한 여행을 {' '}
                <Link to="/login-page">
                  추천
                </Link>
                {' '}해드립니다. <br />
                지금 바로 추천 받고 여행을 떠나보세요!
              </h5>
            </Col>
            <Col md="12">
              <Button
                className="btn-neutral btn-round"
                color="default"
                to="/"
                tag={Link}
                size="lg"
              >
                <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                추천 페이지 바로가기
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default Download;
