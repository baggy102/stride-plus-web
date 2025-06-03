import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/posts'; // API 기본 URL

// 특정 유저의 게시물 가져오기
export const getPostsByUserId = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts by user:', error);
    throw error;
  }
};

// 모든 게시물 가져오기
export const getAllPosts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error;
  }
};

// 게시물 생성
export const createPost = async (postData: any) => {
  try {
    const response = await axios.post(API_BASE_URL, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};