import styled from "styled-components";
import { Button } from "react-bootstrap";

export const VoterCard = styled.div`
  background-color: #ffe8d6;
  margin: 2rem 2rem;
  border-radius: 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const VoterTitle = styled.h2`
  text-align: center;
  padding-top: 3rem;
`;

export const VoterSubtitle = styled.h5`
  padding: 1.5rem 0;
  text-align: center;
`;

export const Voter = styled.h4`
  display: inline;
  text-align: left;
  padding-left: 3rem;
`;

export const Number = styled.h4`
  display: inline;
  padding-right: 5rem;
  margin-left: 2.5rem;
`;

export const VoterButton = styled(Button)`
  text-align: center;
  margin-left: 11rem;
`;
