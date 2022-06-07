import {useState} from "react";
import {Form, Button, Alert} from "react-bootstrap";
import {GoogleButton} from "react-google-button";
import {Link, useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext";

const LogIn2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {logIn, GoogleSignIn} = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await GoogleSignIn();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div>
          <h1 className="d-flex fw-bold fs-8 align-items-center justify-content-center">
            Fake Store
          </h1>
          {error && <Alert variant="danger">{error} </Alert>}
          <h1 className="fw-bold fs-6 ">Log in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center mt-3">
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
        <div className="mt-3 text-center">
          Don't have an account ? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn2;
