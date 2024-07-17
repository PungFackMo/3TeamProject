import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "../../components/Footers/TransparentFooter.js";

function NoticeForm() {
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

    const newNotice = { title, content, author };
    axios.post('http://localhost:8080/api/notice', newNotice, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // 사용자 인증이 필요할 경우 추가
    })
      .then(response => {
        navigate('/notice');
      })
      .catch(error => console.error('공지사항 작성에 실패했습니다.', error));
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/notice.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="8">
              <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="title">제목</Label>
                  <Input
                    type="text"
                    id="title"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="content">내용</Label>
                  <Input
                    type="textarea"
                    id="content"
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </FormGroup>
                <Button className="btn-round" color="info" type="submit">등록</Button>
              </Form>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default NoticeForm;
