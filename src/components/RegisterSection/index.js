import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  CollegeLogo,
  LoginButton,
  LoginForm,
  LoginHeading,
  LoginInput,
  LoginLabel,
  SiteLogo,
  SiteName,
} from "../LoginSection/LoginElements";
import logo from "../../images/logo.png";
import clgLogo from "../../images/college-logo.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const [registerDetails, setRegisterDetails] = useState({
    rollno: "",
    email: "",
    password: "",
  });
  const onHandleChange = (e) => {
    setRegisterDetails({
      ...registerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const RegisterUser = (e) => {
    e.preventDefault();

    axios.post("/register", registerDetails).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <>
      <Container fluid>
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
        <LoginHeading className="para2">Register Page</LoginHeading> <br />
        <Row>
          <LoginForm>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <LoginLabel>Email address</LoginLabel>
              <LoginInput
                type="email"
                placeholder="Enter email"
                name="email"
                value={registerDetails.email}
                onChange={onHandleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRollno.">
              <LoginLabel>Roll no.</LoginLabel>
              <LoginInput
                type="text"
                placeholder="Enter Roll No."
                name="rollno"
                value={registerDetails.rollno}
                onChange={onHandleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <LoginLabel>Password</LoginLabel>
              <LoginInput
                type="password"
                placeholder="Password"
                name="password"
                value={registerDetails.password}
                onChange={onHandleChange}
              />
            </Form.Group>
            <LoginButton
              className="button"
              type="submit"
              onClick={RegisterUser}
            >
              Submit
            </LoginButton>
          </LoginForm>
        </Row>
        <Row>
          <p className="heading" style={{ marginLeft: "10%" }}>
            If already a user,
          </p>
          <Col md={1}>
            <Link to="/login">
              <br />
              <br />
              <Button className="button">Login</Button>
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
      </Container>
    </>
  );
};

export default RegisterComponent;
