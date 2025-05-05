import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import Header from '../components/header';

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WritePost = () => {
  const [content, setContent] = useState('');
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [subImages, setSubImages] = useState<File[]>([]);
  const [location, setLocation] = useState<[number, number] | null>(null);

  // 현재 위치 가져오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  }, []);

  // 지도에서 핀으로 위치 선택
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLocation([e.latlng.lat, e.latlng.lng]);
      },
    });

    return location ? <Marker position={location} /> : null;
  };

  // 대표사진 업로드 핸들러
  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMainImage(e.target.files[0]);
    }
  };

  // 소개사진 업로드 핸들러
  const handleSubImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 5); // 최대 5장
      setSubImages(files);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 데이터 출력 (백엔드로 전송 가능)
    console.log({
      content,
      mainImage,
      subImages,
      location,
    });

    alert('글이 성공적으로 작성되었습니다!');
  };

  return (
    <div className="main-page-container">
      <Header />

      <h1>글쓰기</h1>

      <form onSubmit={handleSubmit} className="write-form">
        {/* 콘텐츠 */}
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        {/* 대표사진 */}
        <div className="form-group">
          <label htmlFor="mainImage">대표사진</label>
          <input
            type="file"
            id="mainImage"
            accept="image/*"
            onChange={handleMainImageChange}
            required
          />
        </div>

        {/* 소개사진 */}
        <div className="form-group">
          <label htmlFor="subImages">소개사진 (최대 5장)</label>
          <input
            type="file"
            id="subImages"
            accept="image/*"
            multiple
            onChange={handleSubImagesChange}
          />
        </div>

        {/* 지도 */}
        <div className="form-group">
          <label>위치</label>
          <MapContainer
            center={location || [37.5665, 126.9780]} // 현재 위치 또는 서울 중심
            zoom={13}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />
            <LocationMarker />
          </MapContainer>
        </div>

        {/* 제출 버튼 */}
        <button type="submit" className="submit-button">
          작성 완료
        </button>
      </form>
    </div>
  );
};

export default WritePost;