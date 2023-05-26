import React, { useContext, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provaider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(null);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Recipes Tasty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="mx-3 text-white text-decoration-none">
              Home
            </Link>
            <Link to="/blog" className="mx-3 text-white text-decoration-none">
              Blog
            </Link>
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="#deets">
                <Image
                  src={user?.photoURL}
                  roundedCircle
                  className="photo-width"
                  title={user?.displayName}
                />
              </Nav.Link>
            )}

            {user ? (
              <Button onClick={handleLogOut} variant="secondary">
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
