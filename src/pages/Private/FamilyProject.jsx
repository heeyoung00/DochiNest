import "./FamilyProject.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import back from "./images/back.png";
import axios from "axios";
import calendarIcon from "./images/date.png"; 

export default function Project_write() {
  const navigate = useNavigate(); 

  const [title, setTitle] = useState(''); // 제목 상태 추가
  const [location, setLocation] = useState(''); // 장소 상태 추가
  const [charCount, setCharCount] = useState(0);
  const [description, setDescription] = useState('');
  const todayDate = new Date(); // 오늘 날짜 고정

  // 게시물 등록 함수
  const handleProjectSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken');
    
    const formData = new FormData();
    formData.append("projectName", title);
    formData.append("content", description);
    formData.append("location", location);
    formData.append("updated_at", todayDate.toISOString()); 

    try {
      const response = await axios.post('http://44.193.101.200:80/api/project/create', formData,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(response)
      if (response.status === 200) {
        console.log(response.data);
        navigate('/MissionFinish');
      } else {
        console.error('등록 실패:', response);
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const maxChars = 500;
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setDescription(value);
      setCharCount(value.length);
    }
  };

  return (
    <div className="project-write-container">
      <div className="mission-d-top-4">
        <div className="mission-d-back-img" onClick={() => navigate('/main')}>
          <img src={back} alt="" />
        </div>
        <div className="mission-d-title">프로젝트</div>
      </div>

      <div className="family-write-main-container">
        <div className="family-write-date">
          <div className="family-write-date-input">
            <span>작성일자: {todayDate.toLocaleDateString()}</span>
            <img src={calendarIcon} alt="Calendar Icon" className="calendar-icon" />
          </div>
        </div>

        <div className="family-write-title">
          <input
            type="text" 
            placeholder="프로젝트 제목을 입력해 주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // 제목 변경 핸들러
            required
          />
        </div>
        <div className="family-write-location">
          <input
            type="text" 
            placeholder="장소를 입력해 주세요"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // 장소 변경 핸들러
            required
          />
        </div>

        <div className="family-write-contents-container">
          <textarea
            className="family-write-contents"
            placeholder="내용을 입력해 주세요"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <div className="family-write-char-count">({charCount}/{maxChars})</div>
        </div>
      </div>
    </div>
  );
}