import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link import

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* 로고를 클릭하면 메인 페이지로 이동 */}
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>Stride+</h1>
      </Link>

      {/* 햄버거 메뉴 버튼 */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* 메뉴가 열렸을 때 나타날 메뉴 */}
      {isMenuOpen && (
        <div className="menu" style={{ position: 'absolute', zIndex: 1001 }}>
          <Link to="/signin" className="header-link">Sign In</Link>
          <Link to="/signup" className="header-link">Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;