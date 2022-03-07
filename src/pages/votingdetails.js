import React from "react";
import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import VotingDetails from "../components/VotingDetailsComponent";

const VotingDetailsPage = () => {
  return (
    <>
      <NavbarSection />
      <VotingDetails />
      <FooterSection />
    </>
  );
};

export default VotingDetailsPage;
