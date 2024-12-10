import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); 
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

      <main>
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

export default App;
