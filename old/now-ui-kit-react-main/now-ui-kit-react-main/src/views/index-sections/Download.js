import React from "react";
import { Link } from "react-router-dom";

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
              <h3 className="title">여러가지 오사카의 매력 속으로 떠나보자!</h3>
              <h5 className="description">
              일본 오사카는 일 년 내내 날씨가 좋아 언제 방문해도 좋은 여행지에요. 유니버설 스튜디오 재팬, 오사카 가이유칸 수족관 등 누구나 좋아하는 도시 명소부터 오사카 성, 도톤보리 등 깊은 역사를 지닌 곳들이 많아요. 오사카에서 꼭 가봐야 할 여행 명소와 계절별 여행 포인트를 알아보아요!
              </h5>
            </Col>
            <Col className="text-center" lg="12" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                to="/"
                tag={Link}
                role="button"
                size="lg"
                >
                오사카 관광지 추천 받으러 가기
              </Button>
              <Button
                className="btn-round"
                color="primary"
                to="/"
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
                to="/"
                tag={Link}
                role="button"
                size="lg"
                >
                오사카 관광지 추천 받으러 가기
              </Button>
              <Button
                className="btn-round"
                color="primary"
                to="/"
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
                to="/"
                tag={Link}
                role="button"
                size="lg"
                >
                오사카 관광지 추천 받으러 가기
              </Button>
              <Button
                className="btn-round"
                color="primary"
                to="/"
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
