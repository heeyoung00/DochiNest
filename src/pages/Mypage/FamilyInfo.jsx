import React, { useState } from "react";
import "./FamilyInfo.css";
import back from "./images/back.png";
import search from "./images/search.png";
import S_Hedgehog from '../../pages/Login/L_Hedgehog.png';

export default function FamilyInfo() {
  const [query, setQuery] = useState(""); // State for the search input
  const [error, setError] = useState(false); // State to handle error message

  const handleSearch = () => {
    if (!query) {
      setError(true); // If no query is entered, show error
    } else {
      setError(false);
      // Handle the search logic here (e.g., filter family members based on query)
      console.log("Searching for:", query);
    }
  };

  return (
    <>
      <div className="familyContainer">
        <div className="mission-d-top">
          <div className="mission-d-back-img">
            <img src={back} alt="back icon" />
          </div>
          <div className="mission-d-title">가족구성원 등록</div>
        </div>

        <div className="user-edit-line"></div>


        <div className="family-plus-main-container">
          <div className="family-plus-search-bar">
            <input
              type="text"
              placeholder="가족구성원의 아이디를 조회해 보세요"
              className="search-input"
              value={query} // Bind query state to the input
              onChange={(e) => setQuery(e.target.value)} // Update query state on input change
            />
            <img
              src={search}
              alt="search icon"
              onClick={handleSearch} // Trigger search when the image is clicked
            />
          </div>

          <div className="family-plus-line"></div>


          {/* Conditionally render error message */}
          {error && <p className="no-results">검색 결과 없음</p>}

          <div className="familyFont">
            <h2>도치가족</h2>
            <h2>가족구성원</h2>
          </div>
        </div>

        <div className="memberContainer">
          <div className="frame">
            <div className="circle">
              <img src={S_Hedgehog} alt="Hedgehog" className="hedgehog" />
            </div>
            <p className="nickname">닉네임: 간지도치</p>
            <p className="id">아이디: dochi123</p>
          </div>
        </div>
      </div>
    </>
  );
}