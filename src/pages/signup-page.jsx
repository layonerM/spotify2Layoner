import { BsSpotify } from "react-icons/bs";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import { LoginWithButton } from "../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../component/Form/FormInput";
import FormRadio from "../component/Form/Radio";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userAtom } from "../recoil";
import { useRecoilState, useSetRecoilState } from "recoil";
import { setSession } from "../utils/auth";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const [user, setUser] = useRecoilState(userAtom);

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!formData.username) {
      errors.username = "Username is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setError(null);
    setFormErrors({});
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    const errors = validateForm();
    setUser((prev) => ({ ...prev, isLoading: true }));

    if (Object.keys(errors).length === 0) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setUser((prev) => ({
            ...prev,
            user: {
              email: user.email,
              uid: user.uid,
              username: formData.username,
            },
            isLoading: false,
          }));
          setSession({
            email: user.email,
            uid: user.uid,
          });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          setError(errorCode);
          setUser((prev) => ({ ...prev, isLoading: false }));
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Container>
        <Col className="p-0 m-0 d-flex flex-column justify-content-center align-items-center  ">
          <Link to="/" className="text-decoration-none">
            <div className="ps-2 pt-4 d-flex align-items-center mb-4 text-light text-light">
              <BsSpotify size={35} />
              <span className="ms-2 fw-bold fs-3">Spotify</span>
            </div>
          </Link>

          <Row className="p-0 m-0 mt-3 mb-4">
            <p className="p-0 m-0 fw-bold" style={{ fontSize: "1.8rem" }}>
              Sign up for free to start listening.
            </p>
          </Row>

          <Col className="mb-3">
            <LoginWithButton>
              <FcGoogle size={24} className="me-5" />
              <span className="fw-bold">Continue With Google</span>
            </LoginWithButton>
            <LoginWithButton>
              <FaFacebook size={24} className="me-5" fill="blue" />
              <span className="fw-bold">Continue With Facebook</span>
            </LoginWithButton>
          </Col>

          <div className="d-flex align-items-center">
            <div
              className="w-5 border border-secondary me-2"
              style={{ width: "180px", height: "0px" }}
            ></div>
            <div className="">or</div>
            <div
              className="w-5 border border-secondary ms-2"
              style={{ width: "180px", height: "0px" }}
            ></div>
          </div>

          <Row className="p-0 m-0 mt-3 mb-4">
            <p className="p-0 m-0 fw-bold" style={{ fontSize: "1.2rem" }}>
              Sign up for free to start listening.
            </p>
          </Row>
          <Row>
            {error && (
              // <div
              //   className="alert alert-danger alert-dismissible fade show"
              //   role="alert"
              // >
              //   <span>{error}</span>
              //   <button
              //     type="button"
              //     className="close"
              //     data-dismiss="alert"
              //     aria-label="Close"
              //   >
              //     <span aria-hidden="true">&times;</span>
              //   </button>
              // </div>
              <FormText className="border border-1 border-danger">
                <span className="text-danger fs-3 p-2">{error}</span>
              </FormText>
            )}
          </Row>

          <Container style={{ width: "29rem", maxWidth: "100%" }}>
            <Form>
              <FormInput
                name="email"
                type="email"
                placeholder="Enter your email."
                label="What's your email?"
                value={formData.email}
                onChange={handleChange}
                formError={formErrors.email}
              />
              <FormInput
                name="password"
                type="password"
                placeholder="Create a password."
                label="Create a password"
                value={formData.password}
                onChange={handleChange}
                formError={formErrors.password}
              />
              <FormInput
                name="username"
                type="text"
                placeholder="Enter a profile name."
                label="What's should we call you?"
                value={formData.username}
                onChange={handleChange}
                formError={formErrors.username}
              />

              <FormGroup>
                <Label className="fw-semibold mt-3">What's your gender?</Label>
                <br />
                <div className="d-flex ">
                  <FormRadio
                    value="male"
                    checked={formData.gender === "male"}
                    handleChange={handleChange}
                  />
                  <FormRadio
                    value="female"
                    checked={formData.gender === "female"}
                    handleChange={handleChange}
                  />
                  <FormRadio
                    value="non-binary"
                    checked={formData.gender === "non-binary"}
                    handleChange={handleChange}
                  />
                  <FormRadio
                    value="other"
                    checked={formData.gender === "other"}
                    handleChange={handleChange}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <Button
                    onClick={handleSignUp}
                    className="rounded-5 mt-5 mb-3 btn-grow text-black py-3 px-5"
                  >
                    <span className="fw-semibold">
                      {user.isLoading ? "Loading..." : "Sign up"}
                    </span>
                  </Button>
                </div>
                <FormGroup check>
                  <Input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    className="text-white bg-black border-secondary login-social-button"
                  />
                  <Label check for="other">
                    ACEPTO{" "}
                    <span>
                      <a href="" style={{ color: "#1ed661 " }}>
                        los terminos y condiciones de Spotify 
                      </a>
                    </span>{" "}
                     y{" "}
                    <span>
                      <a href="" style={{ color: "#1ed661 " }}>
                        Activar la traduccion si no entiendo
                      </a>
                    </span>
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>

            <span className="d-flex justify-content-center text-secondary mb-5">
              Have an account?&nbsp;
              <Link to="/login" className="text-light fw-semibold">
                Log in.
              </Link>
            </span>
          </Container>
        </Col>
      </Container>
    </>
  );
};

export default SignUpPage;
