import React from "react";
import img from "../../images/hero-img1.png";
import {
  HeroColumn1,
  HeroColumn2,
  HeroContainer,
  HeroImg,
  HeroRow,
  MotivationalQuote,
  QuotePerson,
  SiteName,
  VoteButton,
} from "./HeroElements";

export const Herosection = () => {
  const checkLogin = () => {
    const roll = localStorage.getItem("rollno");

    if (roll) {
      window.location.href = "/category";
    } else {
      alert("You have to login first to vote!!!");
      window.location.href = "/login";
    }
  };

  return (
    <HeroContainer fluid>
      <HeroRow>
        <HeroColumn1 md={6}>
          <SiteName>Sphoorthy Electronic Election Commission</SiteName>
          <MotivationalQuote>
            All of us do not have equal talent. But, all of us have an equal
            opportunity to develop our talents.
          </MotivationalQuote>
          <QuotePerson>- A. P. J. Abdul Kalam</QuotePerson>
          <VoteButton variant="light" onClick={checkLogin}>
            Vote Now
          </VoteButton>
        </HeroColumn1>
        <HeroColumn2 md={6}>
          <HeroImg src={img} className="graphic" />
        </HeroColumn2>
      </HeroRow>
    </HeroContainer>
  );
};
