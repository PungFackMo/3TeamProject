import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">지금 바로 떠나세요!</h2>
              <h5 className="description">
                일본 여행은 바로 지금이 기회!!<br />
                일본 내 유명한 관광지 위주로 숙소를 추천받고<br />
                지금 바로 예약해보세요!
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                size="lg"
                to="/" 
                tag={Link}
              >
                예약 하러 가기
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <img src="/img/japan.jpg"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
