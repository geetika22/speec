import React from "react";
import { Gallery } from "../components/CorosalComponent";
import FooterSection from "../components/FooterSection";
import { Herosection } from "../components/HeroComponents";
import { ProblemCard } from "../components/IssueCardComponent";
import NavbarSection from "../components/NavbarSection";
import ScrolltoTop from "../components/ScrollToTop";
import { Testimonial } from "../components/TestimonialSection";

const Home = ({ login }) => {
  return (
    <>
      <ScrolltoTop />
      <NavbarSection login={login} />
      <Herosection />
      <Gallery />
      <Testimonial />
      <FooterSection />
    </>
  );
};

export default Home;
