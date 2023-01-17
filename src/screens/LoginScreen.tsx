import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api/apiURL";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`${API_URL}/users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization")!);
          return res.json();
        } else {
          return res.text().then((text) => Promise.reject(text));
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));

    navigate("/");
  };

  return (
    <FormContainer>
      <h1 className="font-bold text-5xl mb-12 text-center"> Login </h1>
      <form onSubmit={submitHandler}>
        <div className="my-3" id="email">
          <label
            className="font-semibold text-xl text-gray-800"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="block w-full h-10 p-2 focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-3" id="password">
          <label
            className="font-semibold text-xl text-gray-800"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="block w-full h-10 p-2 focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="mt-8 w-full p-2 tracking-wide text-white text-lg transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </FormContainer>
  );
};

export default LoginScreen;
