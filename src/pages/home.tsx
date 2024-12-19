// src/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // main 부분 클릭 시 /mainpage로 이동하는 함수
  const handleMainClick = () => {
    navigate('/mainpage'); // /mainpage로 이동
  };

  return (
    <div>
      <header>
        <h1>Stride+</h1>

        {/* 햄버거 메뉴 버튼 */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* 메뉴가 열렸을 때 나타날 메뉴 */}
        {isMenuOpen && (
          <div className="menu">
            <a href="/signup">Signup</a>
            <a href="/signin">Signin</a>
          </div>
        )}
      </header>

      <main onClick={handleMainClick}> {/* main 부분 클릭 시 handleMainClick 호출 */}
        <img
          src={process.env.PUBLIC_URL + '/main-running-track.jpg'}
          alt="Track"
        />
        <h2>
          Share your track <br />
          Widen your stride
        </h2>
      </main>
    </div>
  );
};

export default Home;
