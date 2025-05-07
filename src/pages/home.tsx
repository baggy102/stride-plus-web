import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import Header from '../components/header'; // Header 컴포넌트 import

const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // main 부분 클릭 시 /mainpage로 이동하는 함수
  const handleMainClick = () => {
    navigate('/mainpage'); // /mainpage로 이동
  };

  return (
    <div>
      <Header /> {/* Header 컴포넌트 사용 */}

      <main onClick={handleMainClick}> {/* main 부분 클릭 시 handleMainClick 호출 */}
        <img
          src={process.env.PUBLIC_URL + '/main-running-track.jpg'}
          alt="Track"
        />
      </main>

      <footer>
        <p></p>
      </footer>
    </div>
  );
};

export default Home;
