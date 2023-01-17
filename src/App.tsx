import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PostList from "./components/PostList";
import { API_URL } from "./api/apiURL";

function App() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/current_user`, {
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
    <div>
      <BrowserRouter>
        <div className="grid grid-cols-7 gap-4 min-h-screen justify-between">
          <div className="h-full justify-center col-start-3 col-span-3 flex flex-col">
            <header className="mt-1">
              <Header userEmail={userEmail} setUserEmail={setUserEmail} />
            </header>
            <div className="bg-gradient-to-b from-indigo-100 to-transparent my-1 rounded-md flex-auto">
              <Routes>
                <Route
                  path="/"
                  element={<HomeScreen userEmail={userEmail} />}
                />
                <Route path="/signup" element={<SignupScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/posts" element={<PostList />} />
              </Routes>
            </div>
            <footer className="mb-1">
              <Footer />
            </footer>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
