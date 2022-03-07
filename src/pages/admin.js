import React from "react";
import { Dashboard } from "../components/DashboardComponents";
import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import { AdminNominee } from "../components/AdminNomineeComponent";

import { Col, Container, Row } from "react-bootstrap";
import ScrolltoTop from "../components/ScrollToTop";
export const admin = () => {
  return (
    <>
      <ScrolltoTop />
      <NavbarSection />
      <Dashboard />
      <Container>
        <Row>
          <Col>
            <AdminNominee />
          </Col>
        </Row>
      </Container>
      <FooterSection />
    </>
  );
};
