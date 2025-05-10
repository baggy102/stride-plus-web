import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header'; // 공통 헤더 사용
import Footer from '../components/footer'; // 공통 푸터 사용
import '../styles/upload.css';

const UploadPost = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !distance || !time || !title || !location) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    alert('업로드 완료!');
    navigate('/');
  };

  return (
    <div className="upload-page">
      <Header /> {/* 공통 헤더 사용 */}
      <div className="upload-container">
        <h2 className="upload-title">WIDEN YOUR STRIDE</h2>
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-group">
            <label htmlFor="image">기록 사진 업로드</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {preview && <img src={preview} alt="preview" className="preview-image" />}

          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="distance">거리 (예: 5km)</label>
            <input
              type="text"
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="거리를 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">시간 (예: 30min)</label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="시간을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">위치</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="위치를 입력하세요"
            />
          </div>

          <button type="submit" className="upload-button">
            업로드
          </button>
        </form>
      </div>
      <Footer /> {/* 공통 푸터 사용 */}
    </div>
  );
};

export default UploadPost;