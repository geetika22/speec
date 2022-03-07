import styled from "styled-components";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Topic = styled.div`
  background: #f9f6f7;
  min-height: 40rem;
`;
export const CardContainer = styled(Container)``;
export const ForumHeading = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding-top: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export const CardRow = styled(Row)``;
export const CardCol = styled(Col)``;
export const Tile = styled(Card)`
  width: 20rem;
  height: 90%;
  margin: 2rem auto;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    margin: 1rem auto;
  }
`;
export const ForumLink = styled(Link)``;
