import React from "react";
import { Link } from "react-router-dom";

interface Props {
  userEmail: string;
  setUserEmail: (userEmail: string) => void;
}

const Header = ({ userEmail, setUserEmail }: Props) => {
  const logoutHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3000/users/sign_out", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")!,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((json) => Promise.reject(json));
        }
      })
      .then((json) => {
        console.dir(json);
      })
      .catch((err) => console.error(err));

    setUserEmail("");
  };

  return (
    <div className="bg-nicepurple h-22 px-6 py-4 box-border rounded-md items-center flex text-lg font-semibold sticky top-2 font-nunito">
      <div className="flex-auto text-start">COMPLAINUS</div>

      {userEmail ? (
        <>
          <div className="mr-16">Signed in as {userEmail} :)</div>
          <div className="text-end" onClick={logoutHandler}>
            <Link to="/">LOGOUT</Link>
          </div>
        </>
      ) : (
        <div className="links flex">
          <div className="mr-8">
            <Link to="/login">LOGIN</Link>
          </div>
          <div className="text-end">
            <Link to="/signup">SIGNUP</Link>
          </div>
        </div>
      )}
    </div>
    // <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    //   <Container>
    //     <Navbar.Brand href="/">ComplaiNUS</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       {userEmail ? (
    //         <Nav className="ms-auto">
    //           <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
    //         </Nav>
    //       ) : (
    //         <Nav className="ms-auto">
    //           <Nav.Link href="/signup">Sign Up</Nav.Link>
    //           <Nav.Link href="/login">Login</Nav.Link>
    //         </Nav>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
