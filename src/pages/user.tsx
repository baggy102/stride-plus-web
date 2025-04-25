import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/main.css';
import Header from '../components/header';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const posts = [
  {
    id: 1,
    userId: 4,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png', // 사용자 프로필 이미지
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '강남구, 서울',
    comments: 20,
    likes: 100,
    lat: 37.4979,
    lng: 127.0276,
  },
  {
    id: 2,
    userId: 4,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '홍대, 서울',
    comments: 15,
    likes: 80,
    lat: 37.5563,
    lng: 126.9220,
  },
];

const UserPage = () => {
  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 가져오기
  const userPosts = posts.filter((post) => post.userId === Number(userId)); // 해당 사용자의 게시물만 필터링

  console.log('userId:', userId); // userId 확인
  console.log('userPosts:', userPosts); // 필터링된 게시물 확인

  const userProfile = userPosts.length > 0 ? userPosts[0].userProfile : ''; // 사용자 프로필 이미지
  const userName = `User ${userId}`; // 사용자 이름 (임의로 설정)

  return (
    <div className="main-page-container">
      <Header />

      {/* 사용자 프로필 표시 */}
      <div className="user-profile-header">
        <img
          src={userProfile}
          alt="User Profile"
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
        />
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{userName}</span>
      </div>

      <MapContainer
        center={[37.5665, 126.9780]} // 서울 중심
        zoom={12} // 적절한 줌 레벨
        className="map-container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {userPosts.map((post) => (
          <Marker key={post.id} position={[post.lat, post.lng]}>
            <Popup>
              <strong>{post.location}</strong>
              <br />
              ❤️ {post.likes} | 💬 {post.comments}
              <br />
              <img
                src={post.image}
                alt={`Track at ${post.location}`}
                style={{ width: '100px', height: '70px', borderRadius: '8px', marginTop: '5px' }}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UserPage;