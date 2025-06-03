import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // API 기본 URL

// 유저 정보 가져오기
export const getUserById = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// 모든 유저 가져오기
export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

// 회원가입
export const signUpUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};