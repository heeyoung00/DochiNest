import React from 'react';
import './Login.css'; 
import S_Hedgehog from '../../pages/Login/L_Hedgehog.png';

const Login = () => {
  return (
    <div className="MainTheme">
      <img src={S_Hedgehog} alt="Hedgehog" className="hedgehog" />
      <h1 className="appName">고슴도치핑</h1>
      <form className="loginForm">
        <input type="text" placeholder="아이디" className="Id" />
        <input type="password" placeholder="비밀번호" className="Pw" />
        <button type="submit" className="loginButton">로그인</button>
      </form>
      <div className="bottomText">
        <span>고슴도치핑 | </span>
        <a href="/signup" className="signupLink">회원가입</a>
      </div>
    </div>
  );
}

export default Login;