import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/comments'; // API 기본 URL

// 특정 게시물의 댓글 가져오기
export const getCommentsByPostId = async (postId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?postId=${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments by post:', error);
    throw error;
  }
};

// 댓글 생성
export const createComment = async (commentData: any) => {
  try {
    const response = await axios.post(API_BASE_URL, commentData);
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};