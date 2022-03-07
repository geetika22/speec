import styled from "styled-components";
import { Col, Container, Row, Button } from "react-bootstrap";

export const HeroContainer = styled(Container)`
  background-color: #f9f6f7;
  min-height: 44rem;
  margin-top: 6px;
`;

export const HeroRow = styled(Row)`
  padding-top: 2rem;
`;

export const HeroColumn1 = styled(Col)`
  text-align: center;

  @media only screen and (max-width: 768px) {
    order: 2;
  }
`;

export const HeroColumn2 = styled(Col)`
  text-align: center;

  @media only screen and (max-width: 768px) {
    order: 1;
  }
`;

export const SiteName = styled.h1`
  text-align: left;
  margin-top: 10rem;
  padding: 0rem 2rem;
  color: #1d3e53;

  font-weight: 700;
  font-family: Volkhov;

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    overflow: hidden;
    padding: 0 5px;
  }
  @media only screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
`;

export const MotivationalQuote = styled.h3`
  padding: 0 3rem;
  text-align: left;
  margin-top: 2rem;
  color: #254b62;
  font-weight: 400;
`;

export const QuotePerson = styled.h5`
  padding: 0 4rem;
  text-align: right;
  margin-top: 2rem;
  color: #476d7c;
  font-family: "Crete Round";
`;

export const VoteButton = styled(Button)`
  margin-top: 3rem;
  color: #ffffff;
  font-weight: 700;
  background-color: #ff971d;
  outline: none;
  border: none;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: #ff971d;
    color: #fff;
  }
`;

export const HeroImg = styled.img`
  margin-top: 7rem;
  width: 80%;

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    width: 80%;
    order: 1;
  }
`;
