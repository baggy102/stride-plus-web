import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/auth.css'; // 공통 스타일 파일

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sign Up with Email: ${email}, Password: ${password}`);
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
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;