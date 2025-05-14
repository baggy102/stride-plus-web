import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router 사용
import '../styles/main.css';
import Header from '../components/header';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
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

const redDotIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style="width: 6px; height: 6px; background-color: red; border-radius: 50%;"></div>`, // 크기를 더 작게 조정
  iconSize: [6, 6], // 아이콘 크기
  iconAnchor: [3, 3], // 중심점
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
  distance: string; // 거리
  time: string; // 시간
  title: string; // 코스 제목
  lat: number;
  lng: number;
};

const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/run.jpg',
    location: '강남구, 서울',
    comments: 20,
    likes: 100,
    distance: '5km',
    time: '30min',
    title: 'Morning Run',
    lat: 37.4979,
    lng: 127.0276,
  },
  {
    id: 2,
    userId: 2,
    userProfile: process.env.PUBLIC_URL + '/sneaker.png',
    image: process.env.PUBLIC_URL + '/runrun.jpg',
    location: '홍대, 서울',
    comments: 15,
    likes: 80,
    distance: '10km',
    time: '1hr',
    title: 'Evening Jog',
    lat: 37.5563,
    lng: 126.9220,
  },
];

const MainPage = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const closeModal = () => {
    setSelectedPost(null); // 모달 닫기
  };

  return (
    <div className="main-page-container">
      <Header />

      <MapContainer
        center={[37.5665, 126.9780]} // 서울 중심
        zoom={12} // 적절한 줌 레벨
        className="map-container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {posts.map((post) => (
          <Marker
            key={post.id}
            position={[post.lat, post.lng]}
            icon={redDotIcon}
            eventHandlers={{
              click: () => {
                setSelectedPost(post);
              },
            }}
          />
        ))}
      </MapContainer>

      {/* 모달창 */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* 사진 섹션 */}
            <div className="modal-image-container">
              <img src={selectedPost.image} alt="Post" className="modal-image" />
            </div>

            {/* 게시물 정보 섹션 */}
            <div className="modal-details">
              <p className="modal-user-name">{`User ${selectedPost.userId}`}</p>
              <p className="modal-title">{selectedPost.title}</p>
              <p className="modal-distance">{`Distance: ${selectedPost.distance}`}</p>
              <p className="modal-time">{`Time: ${selectedPost.time}`}</p>
              <p className="modal-footer-text">Widen your stride</p>
            </div>

            <button className="modal-close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <footer>
        <p>© 2025 Stride+</p>
      </footer>
    </div>
  );
};

export default MainPage;