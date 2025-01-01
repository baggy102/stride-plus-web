import React from 'react';
import '../styles/main.css';
import Header from '../components/header'; // Header 컴포넌트 import

const posts = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: 'Central Park, NY',
    comments: 34,
    likes: 128,
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: 'Golden Gate Park, SF',
    comments: 12,
    likes: 56,
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '대전시 대흥동',
    comments: 6,
    likes: 6,
  },
];

const MainPage = () => {
  return (
    <div className="main-page-container"> {/* 부모 div에 스타일 적용 */}
      <Header /> {/* Header 컴포넌트 사용 */}
      
      <main>
        {posts.map((post) => (
          <div key={post.id} className="post-card-container">
            <div className="post-card">
              <div className="post-image">
                <img src={post.image} alt={`Track at ${post.location}`} />
              </div>
              <div className="post-details">
                <p className="post-location">{post.location}</p>
                <div className="post-interactions">
                  <span className="post-comments">💬 {post.comments}</span>
                  <span className="post-likes">❤️ {post.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MainPage;
