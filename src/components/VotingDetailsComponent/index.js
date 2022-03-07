import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Number,
  Voter,
  VoterCard,
  VoterSubtitle,
  VoterTitle,
  VoterButton,
} from "./VotingDetailsElements";

const VotingDetails = () => {
  const [presidentnames, setPresidentNames] = useState([]);
  const [presidentvotes, setPresidentVotes] = useState([]);
  const [vicepresidentNames, setVicepresidentNames] = useState([]);
  const [vicepresidentVotes, setVicepresidentVotes] = useState([]);
  const [secretaryNames, setSecretaryNames] = useState([]);
  const [secretaryVotes, setSecretaryVotes] = useState([]);
  const [crNames, setCrNames] = useState([]);
  const [crVotes, setCrVotes] = useState([]);

  const updatePresidentValues = () => {
    axios
      .get("/getpvotecount")
      .then((res) => {
        setPresidentNames(Object.keys(res.data));
        setPresidentVotes(Object.values(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateVicePresidentValues = () => {
    axios
      .get("/getvpvotecount")
      .then((res) => {
        setVicepresidentNames(Object.keys(res.data));
        setVicepresidentVotes(Object.values(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSecretaryValues = () => {
    axios
      .get("/getsvotecount")
      .then((res) => {
        setSecretaryNames(Object.keys(res.data));
        setSecretaryVotes(Object.values(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCrValues = () => {
    axios
      .get("/getcrvotecount")
      .then((res) => {
        setCrNames(Object.keys(res.data));
        setCrVotes(Object.values(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <VoterCard>
              <VoterTitle className="heading">President</VoterTitle>
              <VoterSubtitle className="para2 ">
                Number of Votes for Presidents are:
              </VoterSubtitle>
              <div>
                <Voter className="heading">{presidentnames[0]}</Voter>
                <Number className="para2">{presidentvotes[0]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{presidentnames[1]}</Voter>
                <Number className="para2">{presidentvotes[1]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{presidentnames[2]}</Voter>
                <Number className="para2">{presidentvotes[2]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{presidentnames[3]}</Voter>
                <Number className="para2">{presidentvotes[3]}</Number>
              </div>
              <br />
              <VoterButton className="button" onClick={updatePresidentValues}>
                Show/ Update
              </VoterButton>
            </VoterCard>
          </Col>
          <Col lg={6}>
            <VoterCard>
              <VoterTitle className="heading">Vice President</VoterTitle>
              <VoterSubtitle className="para2 ">
                Number of Votes for Vice Presidents are:
              </VoterSubtitle>
              <div>
                <Voter className="heading">{vicepresidentNames[0]}</Voter>
                <Number className="para2">{vicepresidentVotes[0]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{vicepresidentNames[1]}</Voter>
                <Number className="para2">{vicepresidentVotes[1]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{vicepresidentNames[2]}</Voter>
                <Number className="para2">{vicepresidentVotes[2]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{vicepresidentNames[3]}</Voter>
                <Number className="para2">{vicepresidentVotes[3]}</Number>
              </div>
              <br />
              <VoterButton
                className="button"
                onClick={updateVicePresidentValues}
              >
                Show/ Update
              </VoterButton>
            </VoterCard>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <VoterCard>
              <VoterTitle className="heading">Secretary</VoterTitle>
              <VoterSubtitle className="para2 ">
                Number of Votes for Secretaries are:
              </VoterSubtitle>
              <div>
                <Voter className="heading">{secretaryNames[0]}</Voter>
                <Number className="para2">{secretaryVotes[0]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{secretaryNames[1]}</Voter>
                <Number className="para2">{secretaryVotes[1]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{secretaryNames[2]}</Voter>
                <Number className="para2">{secretaryVotes[2]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{secretaryNames[3]}</Voter>
                <Number className="para2">{secretaryVotes[3]}</Number>
              </div>
              <br />
              <VoterButton className="button" onClick={updateSecretaryValues}>
                Show/ Update
              </VoterButton>
            </VoterCard>
          </Col>
          <Col lg={6}>
            <VoterCard>
              <VoterTitle className="heading">Class Representative</VoterTitle>
              <VoterSubtitle className="para2 ">
                Number of Votes for Class Representatives are:
              </VoterSubtitle>
              <div>
                <Voter className="heading">{crNames[0]} </Voter>
                <Number className="para2">{crVotes[0]} </Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{crNames[1]} </Voter>
                <Number className="para2">{crVotes[1]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{crNames[2]} </Voter>
                <Number className="para2">{crVotes[2]}</Number>
              </div>
              <br />
              <div>
                <Voter className="heading">{crNames[3]} </Voter>
                <Number className="para2">{crVotes[3]}</Number>
              </div>
              <br />{" "}
              <VoterButton className="button" onClick={updateCrValues}>
                Show/ Update
              </VoterButton>
            </VoterCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VotingDetails;
