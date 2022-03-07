import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  DashboardCardContainer,
  DashboardContainer,
  DashboardImage,
  DashboardTitle,
} from "./DashBoardElements";
import dashboard from "../../images/dashboard.png";

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Row>
        <Col lg={6}>
          <DashboardCardContainer>
            <DashboardTitle className="heading">Voting Details</DashboardTitle>
            <Link to="/votingdetails">
              <Button className="button">Know here</Button>
            </Link>
          </DashboardCardContainer>
        </Col>
        <Col lg={6}>
          <DashboardImage
            src={dashboard}
            alt="Dashboard image"
            className="graphic"
          />
        </Col>
      </Row>
    </DashboardContainer>
  );
};
