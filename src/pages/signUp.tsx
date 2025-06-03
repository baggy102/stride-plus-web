import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/auth.css'; // 공통 스타일 파일
import { signUpUser } from '../API/userApi'; // API 호출 함수 import

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // 로딩 시작
    setError(null); // 이전 에러 초기화

    try {
      const response = await signUpUser(email, password); // API 호출
      alert('Sign Up Successful!');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      console.error('Error during sign up:', err);
      setError(err.response?.data?.message || 'An error occurred during sign up.');
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2 className="auth-title">Sign Up</h2>
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
          {error && <p className="error-message">{error}</p>} {/* 에러 메시지 표시 */}
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;