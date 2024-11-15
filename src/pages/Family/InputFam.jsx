import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InputFam.css';
import S_Hedgehog from '../../pages/Login/L_Hedgehog.png'; 

const InputFam = () => {
  const navigate = useNavigate();

  const handleSkipClick = () => {
    // 건너뛰기 버튼 클릭 시 '/가족구성원페이지'로 이동
    navigate('/가족구성원페이지');
  };

  return (
    <div className="inputFamContainer">
      <div className="imageContainer">
        <img src={S_Hedgehog} alt="Hedgehog" className="Hedgehog" />
      </div>
      <div className="formContainer">
        <p className="formText">가족명을 입력해주세요!</p>
      </div>
      
      <Link to="/가족구성원페이지" className="registerLink">
        가족구성원 등록하기 &gt;
      </Link>
      
      <button className="skipButton" onClick={handleSkipClick}>건너뛰기</button>
    </div>
  );
};

export default InputFam;