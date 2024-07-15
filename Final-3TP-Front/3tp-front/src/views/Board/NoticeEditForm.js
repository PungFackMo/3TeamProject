import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

function NoticeEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notice/${id}`);
        const notice = response.data;
        setTitle(notice.title);
        setContent(notice.content);
      } catch (error) {
        console.error('공지사항 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchNotice();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedNotice = { title, content };
      await axios.put(`http://localhost:8080/api/notice/${id}`, updatedNotice);

      navigate(`/notice/${id}`);
    } catch (error) {
      console.error('공지사항 수정 중 오류가 발생했습니다.', error);
    }
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
                    style={{ height: '200px' }}
                  />
                </FormGroup>
                <Button className="btn-round" color="info" type="submit">수정</Button>
              </Form>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default NoticeEditForm;
