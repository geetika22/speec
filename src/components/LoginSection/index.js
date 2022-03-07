import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  CollegeLogo,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginHeading,
  LoginInput,
  LoginLabel,
  SiteLogo,
  SiteName,
} from "./LoginElements";
import logo from "../../images/logo.png";
import clgLogo from "../../images/college-logo.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [loginDetails, setLoginDetails] = useState({
    rollno: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();

    axios
      .post("/login", loginDetails)
      .then((response) => {
        if (response.data.errorMessage === "No Error") {
          localStorage.setItem("userToken", response.data.token);
          localStorage.setItem("rollno", response.data.rollno);
          window.location.href = "/";
        } else {
          alert(response.data.errorMessage);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <LoginContainer fluid>
        <Row>
          <Col lg={2} className="hidden">
            <SiteLogo src={logo} alt="logo" />
          </Col>
          <Col lg={8}>
            <SiteName className="heading">
              Sphoorthy Electronic Election Commission (SPEEC)
            </SiteName>
          </Col>
          <Col lg={2} className="hidden">
            <CollegeLogo src={clgLogo} alt="College Logo" />
          </Col>
        </Row>
        <LoginHeading className="para2">Login Page</LoginHeading> <br />
        <Row>
          <LoginForm>
            <Form.Group className="mb-3" controlId="formRollno.">
              <LoginLabel className="para2">Roll no.</LoginLabel>
              <LoginInput
                type="text"
                placeholder="Enter Roll no."
                name="rollno"
                value={loginDetails.rollno}
                onChange={onHandleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <LoginLabel className="para2">Password</LoginLabel>
              <LoginInput
                type="password"
                name="password"
                placeholder="Password"
                value={loginDetails.password}
                onChange={onHandleChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Link to="/">
              <div style={{ textAlign: "center" }}>
                <LoginButton
                  className="button"
                  type="submit"
                  onClick={loginUser}
                >
                  Submit
                </LoginButton>
              </div>
            </Link>
          </LoginForm>
        </Row>
        <Row>
          <p className="heading" style={{ marginLeft: "10%" }}>
            If a new user,
          </p>
          <Col md={1}>
            <Link to="/register">
              <br />
              <br />
              <Button className="button">Register</Button>
            </Link>
          </Col>
          <Col md={2}>
            <Link to="/">
              <br />
              <br />
              <Button className="button">Go to Home Page</Button>
            </Link>
          </Col>
        </Row>
      </LoginContainer>
    </div>
  );
};

export default LoginComponent;
