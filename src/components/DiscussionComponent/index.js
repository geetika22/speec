import React, { useState } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { Media } from "reactstrap";
import card1 from "../../images/card1.png";
import propic from "../../images/propic.png";
import {
  DiscussCol,
  DiscussContainer,
  DiscussHeading,
  Discussimg,
  DiscussPara,
  DiscussRow,
  Rulediv,
  DiscussArea,
} from "./DiscussionElements";

export function Discussion(props) {
  const [Threads, setThreads] = useState([]);
  const [comment, setComment] = useState({
    author: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addPost = (e) => {
    e.preventDefault();
    addComment(comment);
  };
  function addComment(comment) {
    setThreads((prev) => {
      return [...prev, comment];
    });
  }

  return (
    <>
      <Jumbotron fluid className="m-3">
        <DiscussContainer fluid>
          <DiscussRow>
            <DiscussCol lg={6}>
              <DiscussHeading className="display-4 heading">
                Discuss about unemployment
              </DiscussHeading>
              <DiscussPara className="lead para2">
                Unemployment is a term referring to individuals who are
                employable and actively seeking a job but are unable to find a
                job. Included in this group are those people in the workforce
                who are working but do not have an appropriate job. Usually
                measured by the unemployment rate, which is dividing the number
                of unemployed people by the total number of people in the
                workforce, unemployment serves as one of the indicators of a
                country’s economic status.
              </DiscussPara>
              <Rulediv>
                <h4 className="heading">Rules</h4>
                <hr />
                <ul>
                  <li>
                    <p className="para">Don't use offensive words</p>
                  </li>
                  <li>
                    <p className="para">Don't make fun of others</p>
                  </li>
                </ul>
              </Rulediv>
            </DiscussCol>
            <DiscussCol lg={6}>
              <div style={{ textAlign: "center" }}>
                <Discussimg src={card1}></Discussimg>
              </div>
            </DiscussCol>
          </DiscussRow>
        </DiscussContainer>
      </Jumbotron>
      <Form className="m-3">
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="name"
            onChange={handleInputChange}
            value={comment.author}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="content"
            onChange={handleInputChange}
            value={comment.content}
          />
        </Form.Group>
        <Button type="submit" onClick={addPost}>
          post
        </Button>
      </Form>

      <DiscussArea className="m-3">
        {Threads.map((item, index) => {
          return (
            <div className="m-3">
              <Media>
                <Media left href="#">
                  <img src={propic} width="54" height="54" alt="profile"></img>
                </Media>
                <Media body>
                  <Media>
                    <span key={index}>{item.author} </span>
                  </Media>
                  <p key={index}>{item.content}</p>
                </Media>
              </Media>
              <hr />
            </div>
          );
        })}
      </DiscussArea>
    </>
  );
}
