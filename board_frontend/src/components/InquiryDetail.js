import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function InquiryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState(null);
  const [author, setAuthor] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // 댓글 가져오기
  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/inquiry/${id}/comments`);
      setComments(response.data); // 댓글 목록 설정
    } catch (error) {
      console.error('댓글 정보를 불러오는 중 오류가 발생했습니다!', error);
    }
  };

  // 문의 정보와 댓글 초기 데이터 로드
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 문의 정보 가져오기
        const response = await axios.get(`http://localhost:8080/api/inquiry/${id}`);
        console.log('Inquiry data:', response.data);
        setInquiry(response.data);
        setAuthor(response.data.author); // 작성자 설정
  
        // 현재 사용자 정보 가져오기
        const userResponse = await axios.get('http://localhost:8080/user', { withCredentials: true });
        console.log('Current user:', userResponse.data);
        setCurrentUser(userResponse.data.userId);
  
        // 댓글 목록 가져오기
        const commentsResponse = await axios.get(`http://localhost:8080/api/inquiry/${id}/comments`);
        console.log('Comments:', commentsResponse.data);
        setComments(commentsResponse.data);
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
      await axios.post(`http://localhost:8080/api/inquiry/${id}/comments`, { text: commentText }, { withCredentials: true });
      setCommentText(''); // 댓글 입력창 초기화
      fetchComments(); // 댓글 목록을 다시 가져와서 업데이트
    } catch (error) {
      console.error('댓글 작성 중 오류가 발생했습니다!', error);
    }
  };

  // 문의 수정 페이지로 이동
  const handleEdit = () => {
    navigate(`/inquiry/${id}/edit`);
  };

  // 문의 삭제 처리
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/inquiry/${id}`);
      navigate('/inquiry');
    } catch (error) {
      console.error('문의 삭제 중 오류가 발생했습니다!', error);
    }
  };

  // 목록으로 돌아가기
  const handleBackToList = () => {
    navigate('/inquiry');
  };

  if (!inquiry) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className='container'>
      <h1>{inquiry.title}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{inquiry.content}</p>
      <small>{inquiry.author} - {new Date(inquiry.createdAt).toLocaleString()}</small>
      {inquiry.updatedAt && inquiry.updatedAt !== inquiry.createdAt && (
        <small> (수정됨: {new Date(inquiry.updatedAt).toLocaleString()})</small>
      )}

      {currentUser === author && (
        <div>
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}

      <button onClick={handleBackToList}>목록</button>

      {currentUser && (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="댓글을 입력하세요..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
            style={{ width: '100%', height: '100px' }}
          />
          <button type="submit">댓글 작성</button>
        </form>
      )}

      <div>
        <h2>댓글</h2>
        {comments.length === 0 && <p>등록된 댓글이 없습니다.</p>}
        {comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InquiryDetail;
