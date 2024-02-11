import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ReelPage from "./pages/ReelPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/reel/:id" element={<ReelPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
