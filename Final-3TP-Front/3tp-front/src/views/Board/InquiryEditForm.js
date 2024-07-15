import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "../../components/Footers/TransparentFooter.js";

function InquiryEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inquiry/${id}`);
        const inquiry = response.data;
        setTitle(inquiry.title);
        setContent(inquiry.content);
        setAuthor(inquiry.author);
      } catch (error) {
        console.error('문의 정보를 불러오는 중 오류가 발생했습니다!', error);
      }
    };

    fetchInquiry();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedInquiry = { title, content, author };
      await axios.put(`http://localhost:8080/api/inquiry/${id}`, updatedInquiry);

      navigate(`/inquiry/${id}`);
    } catch (error) {
      console.error('문의 수정 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/tokyo.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Card className="card-plain card-inquiry-edit">
                  <CardHeader>
                    <h3 className="title">문의 수정</h3>
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
                        className="form-control mt-3"
                        placeholder="내용"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        style={{ height: '200px' }}
                      />
                      <Button type="submit" className="btn-round mt-3">수정</Button>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default InquiryEditForm;
