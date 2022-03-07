import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";

export const LoginContainer = styled(Container)``;

export const SiteLogo = styled.img`
  width: 100%;
  margin: 0 2rem;

  @media all and (max-width: 992px) {
    display: none;
  }
`;

export const SiteName = styled.h2`
  text-align: center;
  margin-top: 4rem;
`;

export const CollegeLogo = styled.img`
  width: 100%;
  margin-top: 3rem;

  @media all and (max-width: 992px) {
    display: none;
  }
`;

export const LoginHeading = styled.h2`
  text-align: center;
  margin-top: 3rem;
`;

export const LoginForm = styled(Form)`
  width: 40rem;
  padding: 2rem;
  margin: 0 auto;
`;

export const LoginLabel = styled(Form.Label)`
  font-weight: 900;
  font-size: larger;
`;

export const LoginInput = styled(Form.Control)`
  padding: 0 1rem;
  margin: 0 2rem;
  border: 2px solid grey;
`;

export const LoginButton = styled(Button)`
  text-align: center;
  margin-top: 2rem;
`;
