import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; 
import S_Hedgehog from '../../pages/Login/L_Hedgehog.png'; 

const SignIn = () => {
  const nickname = "간지도치"; // 하드코딩된 닉네임
  const navigate = useNavigate();

  const handlePageClick = () => {
    navigate('/inputFam');
  };

  return (
    <div className="signContainer" onClick={handlePageClick}>
      <div className="imageContainer">
        <img src={S_Hedgehog} alt="Hedgehog" className="Hedgehog" />
      </div>
      <div className="textContainer">
        <h2>가입완료!</h2>
        <p>"{nickname}"님 환영해요!</p>
      </div>
    </div>
  );
};

export default SignIn;