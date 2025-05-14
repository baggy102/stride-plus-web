import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header'; // Header 컴포넌트 import
import Footer from '../components/footer'; // Footer 컴포넌트 import
import '../styles/auth.css'; // 동일한 스타일 파일 사용

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      navigate('/'); // 메인 페이지로 이동
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <Header /> {/* 헤더 추가 */}
      <div className="auth-container">
        <h2 className="auth-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Sign In</button>
        </form>
      </div>
      <Footer /> {/* 푸터 추가 */}
    </div>
  );
};

export default SignIn;