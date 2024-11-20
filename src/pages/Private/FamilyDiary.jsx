import "./FamilyDiary.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from "./images/back.png";
import axios from "axios";
import calendarIcon from "./images/date.png";

export default function FamilyDiary() {
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
        formData.append("uploadDate", todayDate.toISOString());

        try {
            const response = await axios.post('http://44.193.101.200:80/api/project/create', formData,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            console.log(response);
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
            <div className="missionTop">
                <div className="mission_back_img" onClick={() => navigate('/MypageMain')}>
                    <img src={back} alt="" />
                </div>
                <div className="missionTitle">도전 과제 내역</div>
            </div>

            <div className="diary-write-main-container">
                <div className="diary-write-date">
                    <div className="diary-write-date-input">
                        <span>작성일자: {todayDate.toLocaleDateString()}</span>
                        <img src={calendarIcon} alt="Calendar Icon" className="calendar-icon" />
                    </div>
                </div>

                <div className="diary-write-location">
                    <input
                        type="text"
                        placeholder="장소를 입력해 주세요"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} // 장소 변경 핸들러
                        required
                    />
                </div>

                <div className="diary-write-input-img"> {/* 여기 사진 연동 자리 */}
                    <span className="diary-write-camera-img"> {/* css 설정 그대로 둠 */}
                        <img alt="가을사진" /> 
                    </span>
                </div>

                <div className="diary-write-contents-container">
                    <textarea
                        className="diary-write-contents"
                        placeholder="내용을 입력해 주세요"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                    <div className="diary-write-char-count">({charCount}/{maxChars})</div>
                </div>

            </div>
        </div>
    );
}