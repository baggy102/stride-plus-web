import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home'; // Home 컴포넌트 import
import MainPage from './pages/main';
import './styles/App.css';
import UserPage from './pages/user';
import WritePost from './pages/writePost';
import UploadPost from './pages/uploadPost';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

function App() {
  return (
    <div className="App">
      {/* 라우터 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* / 경로에 Home 컴포넌트 */}
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/uploadPost" element={<UploadPost />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
