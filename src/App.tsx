import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

function App() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/current_user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")!,
        },
      });

      const data = await response.json();
      setUserEmail(data.email);
    })();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header userEmail={userEmail} setUserEmail={setUserEmail} />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen userEmail={userEmail} />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
