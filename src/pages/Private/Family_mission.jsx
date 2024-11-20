import "./Family_mission.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import back from '../Mission/images/back.png';
import mission1 from '../Mission/images/mission1.png';

export default function Family_mission() {
    const navigate = useNavigate();
    const [missionPost, setmissionPost] = useState([]);

    // 오늘 날짜
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const todayDate = getTodayDate();


    const handleNavigate = (title) => {
        navigate('/FamilyDiary', { state: { title } });
    };

    const missionId1 = missionPost.length > 0 ? missionPost.find((item) => item.id === 1) : null;

    return (
        <div className="missionContainer">
            <div className="missionTop">
                <div className="mission_back_img" onClick={() => navigate('/MypageMain')}>
                    <img src={back} alt="" />
                </div>
                <div className="missionTitle">도전 과제 내역</div>
            </div>

            <div className="missionContent">
                <div className="missionDate">{todayDate}</div>

                <div className="mission1" onClick={() => handleNavigate('가을 축제 방문하기')}>
                    <div className="mission_1_text">
                        <div className="mission_main_sub">
                            지역 축제 방문하기! <br />
                            <span>가을 축제 방문하기</span>
                        </div>
                        <div className="mission_1_daypoint">
                            <div className="mission_1_day">
                                D-{missionId1 ? missionId1.dday : 'N/A'}
                            </div>
                            <div className="mission_1_point">
                                {missionId1 && missionId1.points ? missionId1.points : 'N/A'}P
                            </div>
                        </div>
                    </div>
                    <div className="mission_1_img">
                        <img src={mission1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}