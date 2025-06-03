import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/user.css'; // 스타일 파일 추가
import Header from '../components/header';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from '../components/footer';

const redDotIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style="width: 6px; height: 6px; background-color: red; border-radius: 50%;"></div>`, // 크기를 더 작게 조정
  iconSize: [6, 6], // 아이콘 크기
  iconAnchor: [3, 3], // 중심점
});

const posts = [
  {
    id: 1,
    userId: 1,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '강남구, 서울',
    comments: 20,
    likes: 100,
    lat: 37.4979,
    lng: 127.0276,
    distance: '5km',
    time: '30min',
    title: 'Morning Run',
    username: 'Baggy', // 유저 이름 추가
  },
  {
    id: 2,
    userId: 1,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '홍대, 서울',
    comments: 15,
    likes: 80,
    lat: 37.5563,
    lng: 126.9220,
    distance: '10km',
    time: '1hr',
    title: 'Evening Jog',
    username: 'John Doe', // 유저 이름 추가
  },
];

const UserPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const userPosts = posts.filter((post) => post.userId === Number(userId));

  const userName = userPosts.length > 0 ? `${userPosts[0].username}'s Stride` : 'No Data Available';
  const userProfile = userPosts.length > 0 ? userPosts[0].userProfile : '';

  return (
    <div className="user-page-container">
      <Header />

      {/* 상단 유저 정보 섹션 */}
      <div className="user-info-section">
        {/* 좌측 프로필 사진 */}
        <div className="user-profile">
          <img
            src={userProfile}
            alt="User Profile"
            className="user-profile-image"
          />
        </div>

        {/* 우측 유저 기록 */}
        <div className="user-stats">
          <h3>{userName}</h3>
          <p>Total Runs: {userPosts.length}</p>
          <p>Total Distance: {userPosts.reduce((acc, post) => acc + parseFloat(post.distance), 0)} km</p>
          <p>Total Likes: {userPosts.reduce((acc, post) => acc + post.likes, 0)}</p>
        </div>
      </div>

      {/* 지도 섹션 */}
      <div className="map-section">
        <MapContainer
          center={userPosts.length > 0 ? [userPosts[0].lat, userPosts[0].lng] : [37.5665, 126.9780]}
          zoom={12}
          className="map-container"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />
          {userPosts.map((post) => (
            <Marker
              key={post.id}
              position={[post.lat, post.lng]}
              icon={redDotIcon}
            >
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>{post.title}</strong>
                  <br />
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: '100px',
                      height: '70px',
                      borderRadius: '8px',
                      marginTop: '5px',
                    }}
                  />
                  <br />
                  <span>📍 {post.location}</span>
                  <br />
                  <span>❤️ {post.likes} | 💬 {post.comments}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <Footer /> {/* 공통 푸터 사용 */}
    </div>
  );
};

export default UserPage;