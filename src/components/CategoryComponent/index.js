import React from "react";
import {
  CategoryBackGroundContainer,
  CategoryCard,
  CategoryCardContainer,
  CategoryCardTitle,
  CategoryContainer,
  CategoryImgWrap,
  CategorySubheading,
  CategoryTitle,
  CategoryWrap,
  CollegeAddress,
  CollegeLogo,
  CollegeName,
  SiteName,
} from "./CategoryElements";
import logo from "../../images/sphn_logo.png";
import { Col, Container, Row } from "react-bootstrap";
import president from "../../images/president-image.jpg";
import vicepresident from "../../images/vice-president-image.jpg";
import secretary from "../../images/scretary-image.jpg";
import cr from "../../images/cr-image.jpg";
import { Link } from "react-router-dom";

const CategoryComponents = () => {
  return (
    <>
      <CategoryContainer>
        <CategoryBackGroundContainer fluid>
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
                Sagar Road,Nadargul Village, Saroornagar Mandal, Nadergul Rd,
                Near Vanasthalipuram, Hyderabad, Telangana 501510.{" "}
              </CollegeAddress>
            </Col>
          </Row>
        </CategoryBackGroundContainer>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <CategoryTitle className="heading">
                Category Section
              </CategoryTitle>
              <CategorySubheading className="para2">
                Welcome to Computer Science and Engineering Department <br />
                Here are the different categories of post that you can vote
                for...
              </CategorySubheading>
            </Col>
          </Row>
        </Container>
        <div>
          <CategoryCardContainer>
            <Row>
              <Col xs={12} md={6}>
                <Link to="/president" style={{ textDecoration: "none" }}>
                  <CategoryCard>
                    <CategoryImgWrap>
                      <CategoryWrap src={president} />
                    </CategoryImgWrap>
                    <CategoryCardTitle className="heading">
                      President Elections
                    </CategoryCardTitle>
                  </CategoryCard>
                </Link>
              </Col>
              <Col xs={12} md={6}>
                <Link to="/vice-president" style={{ textDecoration: "none" }}>
                  <CategoryCard>
                    <CategoryImgWrap>
                      <CategoryWrap src={vicepresident} />
                    </CategoryImgWrap>
                    <CategoryCardTitle className="heading">
                      Vice President Elections
                    </CategoryCardTitle>
                  </CategoryCard>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Link to="/secretary" style={{ textDecoration: "none" }}>
                  <CategoryCard>
                    <CategoryImgWrap>
                      <CategoryWrap src={secretary} />
                    </CategoryImgWrap>
                    <CategoryCardTitle className="heading">
                      Secretary Elections
                    </CategoryCardTitle>
                  </CategoryCard>
                </Link>
              </Col>
              <Col xs={12} md={6}>
                <Link to="/cr" style={{ textDecoration: "none" }}>
                  <CategoryCard>
                    <CategoryImgWrap>
                      <CategoryWrap src={cr} />
                    </CategoryImgWrap>
                    <CategoryCardTitle className="heading">
                      CR Elections
                    </CategoryCardTitle>
                  </CategoryCard>
                </Link>
              </Col>
            </Row>
          </CategoryCardContainer>
        </div>
      </CategoryContainer>
    </>
  );
};

export default CategoryComponents;
