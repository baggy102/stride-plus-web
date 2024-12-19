import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home'; // Home 컴포넌트 import
import './App.css';

// 예시로 추가할 MainPage 컴포넌트
const MainPage = () => {
  return <div>Main Page</div>;
};

function App() {
  return (
    <div className="App">
      {/* 라우터 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* / 경로에 Home 컴포넌트 */}
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
