import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
  );
};

export default Header;
