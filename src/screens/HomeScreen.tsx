import React from "react";

interface Props {
  userEmail: string;
}

const HomeScreen = ({ userEmail }: Props) => {
  return userEmail ? (
    <h1>Welcome {userEmail}!</h1>
  ) : (
    <h1>Welcome to the Home Page!</h1>
  );
};

export default HomeScreen;
