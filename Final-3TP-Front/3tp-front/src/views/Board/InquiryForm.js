import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Col
} from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import TransparentFooter from "../../components/Footers/TransparentFooter";

function InquiryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/user', { withCredentials: true })
      .then(response => {
        setAuthor(response.data.userId);
      })
      .catch(error => {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다.', error);
        navigate('/login'); // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
      });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInquiry = { title, content, author };
    axios.post('http://localhost:8080/api/inquiry', newInquiry, {
      withCredentials: true // 사용자 인증이 필요할 경우 추가
    })
      .then(response => {
        navigate('/inquiry');
      })
      .catch(error => {
        console.error('게시글 작성에 실패했습니다.', error);
      });
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/Inquiry.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="6">
              <Card className="card-plain card-inquiry-form">
                <CardHeader className="text-center">
                  <h3 className="title">새 글 작성</h3>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="제목"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <textarea
                      className="form-control"
                      placeholder="내용"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      style={{ height: '200px' }}
                    />
                    <Button
                      className="btn-round"
                      color="info"
                      type="submit"
                    >
                      등록
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default InquiryForm;
