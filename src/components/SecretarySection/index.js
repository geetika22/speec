import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CategorySubheading,
  CategoryTitle,
  CollegeAddress,
  CollegeLogo,
  CollegeName,
  SiteName,
} from "../CategoryComponent/CategoryElements";
import logo from "../../images/sphn_logo.png";
import FooterSection from "../FooterSection";
import NavbarSection from "../NavbarSection";
import axios from "axios";
import SecretaryCard from "./ScretaryCardComponent";
import ScrolltoTop from "../ScrollToTop";

const PresidentSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/secretarydata")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
    <ScrolltoTop />
      <NavbarSection />
      <Container>
        <Row>
          <Col xs={12} md={4} lg={2}>
            <CollegeLogo src={logo} />
          </Col>
          <Col xs={12} md={8} lg={10}>
            <SiteName className="heading">
              Sphoorthy Electronic Election Commission
            </SiteName>
            <CollegeName className="para2">
              Sphoorthy Engineering College
            </CollegeName>
            <CollegeAddress className="para">
              Sagar Road,Nadargul Village, Saroornagar Mandal, Nadergul Rd, Near
              Vanasthalipuram, Hyderabad, Telangana 501510.{" "}
            </CollegeAddress>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <CategoryTitle className="heading">Secretary Section</CategoryTitle>
            <CategorySubheading className="para2">
              Welcome to Computer Science and Engineering Department <br />
              Here are the different candidates that stood for the Secretary
              Post...
              <br />
              <b>
                Don't Refresh the page while voting and Click the vote button
                <i>TWICE</i> for confirming your vote
              </b>
              <br /> Choose the one you prefer...
            </CategorySubheading>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <SecretaryCard {...posts[0]} />
          </Col>
          <Col lg={6}>
            <SecretaryCard {...posts[1]} />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <SecretaryCard {...posts[2]} />
          </Col>
          <Col lg={6}>
            <SecretaryCard {...posts[3]} />
          </Col>
        </Row>
      </Container>
      <FooterSection />
    </>
  );
};

export default PresidentSection;
