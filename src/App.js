import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav.jsx";
import NavUp from "./components/NavUp/NavUp.jsx";
import Main from "./pages/Main/Main.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignUp/SignIn.jsx";
import InputFam from "./pages/Family/InputFam.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Nav /><Main /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<><NavUp /><SignUp /></>} />
        <Route path='/signin' element={<><NavUp /><SignIn /></>} />
        <Route path='/inputFam' element={<><NavUp /><InputFam /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;