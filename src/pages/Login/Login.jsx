import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provaider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin, gitHubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLoginGoogle = () => {
    googleLogin()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGitHubLogin = () => {
    gitHubLogin()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center">Login your account</h2>
        <Form onSubmit={handleLogin} className="bg-white w-50 mx-auto p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br></br>
          <Form.Text className="text-secondary">
            Don't Have An Account ? <Link to="/register">Register</Link>
          </Form.Text>
          <br></br>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>

        <div className="text-center">
          <h4>Login With</h4>
          <Button variant="outline-primary" onClick={handleLoginGoogle}>
            <FaGoogle></FaGoogle> Login With Google
          </Button>
          <br></br>
          <Button
            className="mt-2"
            variant="outline-secondary"
            onClick={handleGitHubLogin}
          >
            <FaGithub></FaGithub> Login With Github
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
