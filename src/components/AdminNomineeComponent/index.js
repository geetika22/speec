import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { AdminNomineeContainer } from "./AdminNomineeComponent";
import axios from "axios";

export const AdminNominee = () => {
  const [AddNomineeShow, setNomineeShow] = useState(false);
  const [DeleteNomineeShow, setDeleteNomineeShow] = useState(false);
  return (
    <>
      <AdminNomineeContainer>
        <h1 className="text-center mt-4">Nominees</h1>

        <p className="underline"></p>

        <div className="text-center mt-4">
          <Button className="button" onClick={() => setNomineeShow(true)}>
            Add Nominee
          </Button>
          <AddNominee
            show={AddNomineeShow}
            onHide={() => setNomineeShow(false)}
          />
        </div>

        <div className="text-center mt-2">
          <Button className="button" onClick={() => setDeleteNomineeShow(true)}>
            Remove Nominee
          </Button>
          <RemoveNomiee
            show={DeleteNomineeShow}
            onHide={() => setDeleteNomineeShow(false)}
          />
        </div>
      </AdminNomineeContainer>
    </>
  );
};

const AddNominee = (props) => {
  const [nominee, setNominee] = useState({
    name: "",
    file: "",
    rollno: "",
    dept: "",
    batch: "",
    desc: "",
    post: "",
  });

  const [nfile, setFile] = useState("");

  const [nname, setName] = useState("");

  const [nrollno, setRollno] = useState("");

  const [ndept, setDept] = useState("");

  const [nbatch, setBatch] = useState("");

  const [ndesc, setDesc] = useState("");

  const [npost, setPost] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setFile(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileread = new FileReader();
      fileread.readAsDataURL(file);
      fileread.onload = () => {
        resolve(fileread.result);
      };
      fileread.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRollChange = (e) => {
    setRollno(e.target.value);
  };

  const onDeptChange = (e) => {
    setDept(e.target.value);
  };

  const onBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const onHandleChange = (e) => {
    setNominee((prev) => {
      return {
        ...prev,
        name: nname,
        file: nfile,
        rollno: nrollno,
        dept: ndept,
        batch: nbatch,
        desc: ndesc,
        post: npost,
      };
    });
  };

  const addPost = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/admin/register", nominee)
      .then((response) => {
        console.log("Registered");
        alert(response.data.message);
      })
      .catch((err) => {
        alert(err);
      });
    setFile("");
    setName("");
    setRollno("");
    setDesc("");
    setPost("");
    setDept("");
    setBatch("");

    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Nominee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-4">
          <Form.Group className="ml-4 mr-4">
            <Form.Label>
              <h5>Nominee image</h5>
            </Form.Label>
            <br />
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </Form.Group>

          <Form.Group className="ml-4 mr-4">
            <Form.Label>
              <h5>Nominee Name</h5>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name of Nominee"
              onChange={handleNameChange}
              value={nname}
            />
          </Form.Group>
          <Form.Group className="ml-4 mr-4">
            <Form.Label>
              <h5>Roll number</h5>
            </Form.Label>
            <Form.Control
              type="text"
              name="rollno"
              placeholder="Roll number of Nominee"
              onChange={handleRollChange}
              value={nrollno}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              <h5>Department Nominee belongs to</h5>
            </Form.Label>
            <Container>
              <Row>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="dept"
                    label="CSE"
                    value="CSE"
                    onChange={onDeptChange}
                  />
                </Col>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="dept"
                    label="ECE"
                    value="ECE"
                    onChange={onDeptChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="dept"
                    label="EEE"
                    value="EEE"
                    onChange={onDeptChange}
                  />
                </Col>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="dept"
                    label="EEE"
                    value="EEE"
                    onChange={onDeptChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="dept"
                    label="Civil"
                    value="Civil"
                    onChange={onDeptChange}
                  />
                </Col>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="dept"
                    label="MECH"
                    value="Mech"
                    onChange={onDeptChange}
                  />
                </Col>
              </Row>
            </Container>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              <h5>Year of Study</h5>
            </Form.Label>
            <Container>
              <Row>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="batch"
                    value="First Year"
                    onChange={onBatchChange}
                    label="First Year"
                  />
                </Col>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="batch"
                    value="Second Year"
                    onChange={onBatchChange}
                    label="Second Year"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="batch"
                    value="Third Year"
                    onChange={onBatchChange}
                    label="Third Year"
                  />
                </Col>
                <Col lg={6} md={12} style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    name="batch"
                    value="Fourth Year"
                    onChange={onBatchChange}
                    label="Fourth Year"
                  />
                </Col>
              </Row>
            </Container>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h5>Description</h5>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <h5>Post of Nomination</h5>
            </Form.Label>
            <Form.Check
              type="radio"
              name="post"
              value="President"
              onChange={handlePostChange}
              label="President"
            />
            <Form.Check
              type="radio"
              name="post"
              value="Vice President"
              onChange={handlePostChange}
              label="Vice President"
            />
            <Form.Check
              type="radio"
              name="post"
              value="Secretary"
              onChange={handlePostChange}
              label="Secretary"
            />
            <Form.Check
              type="radio"
              name="post"
              value="Class Representative"
              onChange={handlePostChange}
              label="Class Representative"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Confirm your details"
              onChange={onHandleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" onClick={addPost}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const RemoveNomiee = (props1) => {
  const [drollno, setDRollno] = useState({
    rollno: "",
    post: "",
  });

  const onRollChange = (e) => {
    setDRollno({ ...drollno, [e.target.name]: e.target.value });
  };

  const removePost = (e) => {
    e.preventDefault();

    axios
      .post("/admin/remove", drollno)
      .then((response) => {
        console.log("Removed Nominee");
        alert(response.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Modal
      {...props1}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">Delete Nominee</h4>
        <p className="underline "></p>
        <Form className="text-center mt-4">
          <Form.Group className="ml-4 mr-4">
            <Form.Label>
              <h5>Nominee Roll number</h5>
            </Form.Label>
            <Form.Control
              placeholder="Roll number"
              type="text"
              name="rollno"
              value={drollno.rollno}
              onChange={onRollChange}
              required
            />
          </Form.Group>
          <Form.Group className="ml-4 mr-4">
            <Form.Label>
              <h5>Post</h5>
            </Form.Label>
            <Form.Check
              type="radio"
              name="post"
              value="President"
              onChange={onRollChange}
              label="President"
            />
            <Form.Check
              type="radio"
              name="post"
              value="Vice President"
              onChange={onRollChange}
              label="Vice President"
            />
            <Form.Check
              type="radio"
              name="post"
              value="Secretary"
              onChange={onRollChange}
              label="Secretary"
            />
            <Form.Check
              type="radio"
              name="post"
              value="Class Representative"
              onChange={onRollChange}
              label="Class Representative"
            />
          </Form.Group>
          <Button variant="primary" onClick={removePost}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
