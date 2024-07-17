import React, { useEffect, useState } from 'react';
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

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);
  const [author, setAuthor] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // 댓글 가져오기
  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/notice/${id}/comments`);
      setComments(response.data); // 댓글 목록 설정
    } catch (error) {
      console.error('댓글 정보를 불러오는 중 오류가 발생했습니다!', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/notice/${id}`);
        console.log('Notice data:', response.data);
        setNotice(response.data);
        setAuthor(response.data.author); // 작성자 설정
  
        // 현재 사용자 정보 가져오기
        const userResponse = await axios.get('http://localhost:8080/user', { withCredentials: true });
        console.log('Current user:', userResponse.data);
        setCurrentUser(userResponse.data.userId);
  
        // 댓글 목록 가져오기
        fetchComments();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [id]);

  // 댓글 작성 처리
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8080/api/notice/${id}/comments`, { text: commentText }, { withCredentials: true });
      setCommentText(''); // 댓글 입력창 초기화
      fetchComments(); // 댓글 목록을 다시 가져와서 업데이트
    } catch (error) {
      console.error('댓글 작성 중 오류가 발생했습니다!', error);
    }
  };

  // 공지 수정 페이지로 이동
  const handleEdit = () => {
    navigate(`/notice/${id}/edit`);
  };

  // 공지 삭제 처리
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/notice/${id}`);
      navigate('/notice');
    } catch (error) {
      console.error('공지 삭제 중 오류가 발생했습니다!', error);
    }
  };

  // 목록으로 돌아가기
  const handleBackToList = () => {
    navigate('/notice');
  };

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/notice.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Card className="card-plain card-inquiry-detail">
                  <CardHeader>
                    <h3 className="title">{notice.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ whiteSpace: 'pre-line' }}>{notice.content}</p>
                    <small>{notice.author} - {new Date(notice.createdAt).toLocaleString()}</small>
                    {notice.updatedAt && notice.updatedAt !== notice.createdAt && (
                      <small> (수정됨: {new Date(notice.updatedAt).toLocaleString()})</small>
                    )}

                    {currentUser === author && (
                      <div>
                        <Button className="btn-round mr-2" onClick={handleEdit}>수정</Button>
                        <Button className="btn-round" onClick={handleDelete}>삭제</Button>
                      </div>
                    )}

                    <Button className="btn-round mt-2" onClick={handleBackToList}>목록</Button>

                    {currentUser && (
                      <form onSubmit={handleCommentSubmit} className="mt-3">
                        <textarea
                          className="form-control"
                          placeholder="댓글을 입력하세요..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          required
                          style={{ width: '100%', height: '100px' }}
                        />
                        <Button type="submit" className="btn-round mt-2">댓글 작성</Button>
                      </form>
                    )}

                    <div className="mt-4">
                      <h4>댓글</h4>
                      {comments.length === 0 && <p>등록된 댓글이 없습니다.</p>}
                      {comments.map(comment => (
                        <div key={comment.id} className="mb-3 pb-3 border-bottom">
                          <p>{comment.text}</p>
                          <small>{comment.author} - {new Date(comment.createdAt).toLocaleString()}</small>
                        </div>
                      ))}
                    </div>
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

export default NoticeDetail;
