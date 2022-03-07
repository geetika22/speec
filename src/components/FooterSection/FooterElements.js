import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const FooterContainer = styled(Container)`
  background-color: #ffe8d6;
  height: 100%;
`;

export const FooterRow = styled(Row)`
  padding: 1rem;
`;

export const FooterColumn = styled(Col)`
  height: 100%;
  padding: 0;
`;

export const FooterLogo = styled.img`
  width: 85%;
`;

export const SiteName = styled.h2`
  text-align: left;
  padding-top: 4rem;
  margin-bottom: 2rem;
  padding-left: 0;
  color: #1d3e53;
`;

export const CollegeDetails = styled.div`
  padding: 10px;
  text-align: center;
`;

export const CollegeLogo = styled.img`
  width: 70%;
  margin-top: 25px;
`;

export const CollegeAddress = styled.h5`
  color: #1d3e53;
  padding-top: 10px;
  line-height: 1.5;
`;

export const Copyright = styled.h5`
  text-align: center;
`;

export const SocialLink = styled.a`
  margin: 2rem;
  color: #ffffff;
  background-color: #ff971d;
  font-size: 1.2rem;
  padding: 0.4rem 0.6rem 0.8rem;
  border-radius: 50%;
`;
