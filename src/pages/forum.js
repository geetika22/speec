import React from "react";
import { Discussion } from "../components/DiscussionComponent";
import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";

export const forum = () => {
  return (
    <>
      <NavbarSection />
      <Discussion />
      <FooterSection />
    </>
  );
};
