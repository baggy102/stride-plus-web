import React, { useState } from 'react';
import '../styles/main.css';
import Header from '../components/header';

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet 마커 아이콘 경로 문제 해결
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
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '강남구, 서울',
    comments: 20,
    likes: 100,
    lat: 37.4979,
    lng: 127.0276,
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '홍대, 서울',
    comments: 15,
    likes: 80,
    lat: 37.5563,
    lng: 126.9220,
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/main-running-track.jpg',
    location: '여의도, 서울',
    comments: 10,
    likes: 60,
    lat: 37.5241,
    lng: 126.9265,
  },
  {
    id: 4,
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

  return (
    <div className="main-page-container">
      <Header />

      {/* 지도 렌더링 */}
      <MapContainer
        center={[37.5665, 126.9780]} // 서울 중심
        zoom={12} // 적절한 줌 레벨
        className="map-container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // CartoDB Light 테마
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* 서울 중심에 구분선 추가
        <Circle
          center={[37.5665, 126.9780]} // 서울 중심
          radius={5000} // 반경 5km
          pathOptions={{
            color: '#013970', // 구분선 색상 (stride+ 마크 색상)
            weight: 2, // 선 두께
            fillOpacity: 0.1, // 내부 투명도
          }}
        /> */}

        {posts.map((post) => (
          <Marker
            key={post.id}
            position={[post.lat, post.lng]}
            eventHandlers={{
              click: () => {
                setSelectedPost(post); // 핀 클릭 시 게시물 선택
              },
            }}
          >
            <Popup>
              <strong>{post.location}</strong>
              <br />
              ❤️ {post.likes} | 💬 {post.comments}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 선택된 게시물 정보 */}
      {selectedPost && (
        <div className="selected-post">
          <div className="post-card">
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