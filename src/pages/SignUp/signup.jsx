import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate를 임포트
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    email: '',
    nickname: '',
  });
  
  const navigate = useNavigate();  // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('폼 제출됨:', formData);
    // 회원가입 처리 후 SignIn 페이지로 이동
    navigate('/signin'); 
    // 폼 초기화
    setFormData({
      id: '',
      password: '',
      email: '',
      nickname: '',
    });
  };

  return (
    <div className="signUpForm">
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="id">
            아이디 <span className="required">*</span>
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="inputField Id"
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">
            비밀번호 <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="inputField Pw"
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">
            이메일 <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inputField Email"
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="nickname">
            닉네임 <span className="required">*</span>
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="inputField Nickname"
            placeholder="닉네임을 입력하세요"
          />
        </div>

        <button type="submit" className="submitBtn">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;