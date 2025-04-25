import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router 사용
import '../styles/main.css';
import Header from '../components/header';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// 게시물 타입 정의
type Post = {
  id: number;
  userId: number;
  userProfile: string;
  image: string;
  location: string;
  comments: number;
  likes: number;
  lat: number;
  lng: number;
};

const posts: Post[] = [
  {
    id: 1,
    userId: 1,
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
    userId: 2,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '홍대, 서울',
    comments: 15,
    likes: 80,
    lat: 37.5563,
    lng: 126.9220,
  },
  {
    id: 3,
    userId: 3,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '여의도, 서울',
    comments: 10,
    likes: 60,
    lat: 37.5241,
    lng: 126.9265,
  },
  {
    id: 4,
    userId: 4,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '잠실, 서울',
    comments: 25,
    likes: 120,
    lat: 37.5139,
    lng: 127.1025,
  },
];

const MainPage = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const navigate = useNavigate(); // React Router의 navigate 함수

  return (
    <div className="main-page-container">
      <Header />

      <MapContainer
        center={[37.5665, 126.9780]} // 서울 중심
        zoom={12} // 적절한 줌 레벨
        className="map-container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // CartoDB Light 테마
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {posts.map((post) => (
          <Marker
            key={post.id}
            position={[post.lat, post.lng]}
            eventHandlers={{
              click: () => {
                setSelectedPost(post);
              },
            }}
          >
            <Popup>
              <strong>{post.location}</strong>
              <br />
              ❤️ {post.likes} | 💬 {post.comments}
              <br />
              {/* 사용자 프로필 클릭 시 개인 화면으로 이동 */}
              <img
                src={post.userProfile}
                alt="User Profile"
                className="user-profile"
                onClick={() => navigate(`/user/${post.userId}`)} // 개인 화면으로 이동
                style={{ cursor: 'pointer', width: '30px', height: '30px', borderRadius: '50%' }}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedPost && (
        <div className="selected-post">
          <div className="post-card">
            {/* 사용자 프로필 이미지 */}
            <div className="post-user-profile">
              <img
                src={selectedPost.userProfile}
                alt="User Profile"
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginBottom: '10px' }}
              />
            </div>
            {/* 게시물 이미지 */}
            <div className="post-image">
              <img src={selectedPost.image} alt={`Track at ${selectedPost.location}`} />
            </div>
            <div className="post-details">
              <p className="post-location">{selectedPost.location}</p>
              <div className="post-interactions">
                <span className="post-comments">💬 {selectedPost.comments}</span>
                <span className="post-likes">❤️ {selectedPost.likes}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;