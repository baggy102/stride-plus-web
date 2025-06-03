import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link import

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ position: 'relative', zIndex: 1000 }}>
      {/* 로고 */}
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>Stride+</h1>
      </Link>

      {/* 햄버거 메뉴 버튼 */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* 메뉴 */}
      {isMenuOpen && (
        <div className="menu" style={{ position: 'absolute', zIndex: 1001 }}>
          <Link to="/signin" className="header-link">Sign In</Link>
          <Link to="/signup" className="header-link">Sign Up</Link>
          <Link to="/user/1" className="header-link">My Page</Link> {/* User Page 추가 */}
        </div>
      )}
    </header>
  );
};

export default Header;