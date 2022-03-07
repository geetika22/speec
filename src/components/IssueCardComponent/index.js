import React, { useEffect } from "react";
import card1 from "../../images/card1.png";
import pandamic from "../../images/pandamic.png";
import socialissue from "../../images/socialissue.png";
import { Button } from "react-bootstrap";
import {
  CardCol,
  CardContainer,
  CardRow,
  ForumLink,
  ForumHeading,
  Tile,
  Topic,
} from "./CardElements";
import Aos from "aos";
import "aos/dist/aos.css";

export const ProblemCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Topic data-aos="fade-up">
        <ForumHeading className="heading">Discussion Forums</ForumHeading>
        <p className="underline"></p>
        <CardContainer className="my-5">
          <CardRow>
            <CardCol md={4} lg={4}>
              <Tile className="text-center">
                <Tile.Img
                  style={{ borderRadius: "20px 20px 0 0" }}
                  variant="top"
                  src={card1}
                  width="286"
                  height="150"
                />
                <Tile.Body className="mt-3">
                  <Tile.Title>
                    <h4 className="heading">Unemployment</h4>
                  </Tile.Title>
                  <Tile.Text className="para2">
                    Unemployment is a term referring to individuals who are
                    employable and actively seeking a job but are unable to find
                    a job.
                  </Tile.Text>
                  <Button className="button">
                    <ForumLink to="/forum" style={{ color: "white" }}>
                      Discuss
                    </ForumLink>
                  </Button>
                </Tile.Body>
              </Tile>
            </CardCol>
            <CardCol md={4} lg={4}>
              <Tile className="text-center">
                <Tile.Img
                  style={{ borderRadius: "20px 20px 0 0" }}
                  variant="top"
                  src={pandamic}
                  width="286"
                  height="150"
                />
                <Tile.Body className="mt-3">
                  <Tile.Title>
                    {" "}
                    <h4 className="heading">Pandemic</h4>
                  </Tile.Title>
                  <Tile.Text className="para2">
                    Pandemic, outbreak of infectious disease that occurs over a
                    wide geographical area and that is of high prevalence
                  </Tile.Text>
                  <Button className="button">
                    <ForumLink
                      to="/forum"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Discuss
                    </ForumLink>
                  </Button>
                </Tile.Body>
              </Tile>
            </CardCol>
            <CardCol md={4} lg={4}>
              <Tile className="text-center">
                <Tile.Img
                  style={{ borderRadius: "20px 20px 0 0" }}
                  variant="top"
                  src={socialissue}
                  width="286"
                  height="150"
                />
                <Tile.Body className="mt-3">
                  <Tile.Title>
                    <h4 className="heading">Social Issue</h4>
                  </Tile.Title>
                  <Tile.Text className="para2">
                    A social issue is a problem that affects many people within
                    a society. It is a group of common problems in present-day
                  </Tile.Text>
                  <Button className="button">
                    <ForumLink to="/forum" style={{ color: "white" }}>
                      Discuss
                    </ForumLink>
                  </Button>
                </Tile.Body>
              </Tile>
            </CardCol>
          </CardRow>
        </CardContainer>
      </Topic>
    </>
  );
};
