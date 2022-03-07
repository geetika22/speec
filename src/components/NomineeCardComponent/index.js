import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  NomineeBatch,
  NomineeCardContainer,
  NomineeDept,
  NomineeImg,
  NomineeName,
  NomineeRollno,
} from "./NomineeCardElements";

const NomineeCard = ({ img, name, _id, dept, batch }) => {
  const [vote, setVote] = useState({
    pvote: 0,
    pname: "",
    rollno: "",
  });
  const [data, setdata] = useState([]);

  const postVote = () => {
    axios.post("http://localhost:5000/presidentvote", vote).then((res) => {
      console.log("Voted");
    });
  };

  const voteupdate = (e) => {
    setVote((prev) => {
      return {
        ...prev,
        pvote: 1,
        pname: name,
        rollno: localStorage.getItem("rollno"),
      };
    });
    postVote();
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/presidentvoted/" + localStorage.getItem("rollno")
      )
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <NomineeCardContainer>
        <NomineeImg src={img} alt="Profile Image" />
        <NomineeName className="heading">{name}</NomineeName>
        <NomineeRollno className="para2">{_id}</NomineeRollno>
        <NomineeDept className="para">{dept}</NomineeDept>
        <NomineeBatch className="para">{batch}</NomineeBatch>
        {data["voted"] === false ? (
          <Button className="button" onClick={voteupdate}>
            Vote
          </Button>
        ) : (
          <Button
            className="button"
            onClick={() => {
              alert("You already voted to certain President!!!");
            }}
          >
            Voted
          </Button>
        )}
      </NomineeCardContainer>
    </>
  );
};

export default NomineeCard;
