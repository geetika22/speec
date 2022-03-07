import React from "react";
import FooterSection from "../components/FooterSection";
import RegisterComponent from "../components/RegisterSection";
import ScrolltoTop from "../components/ScrollToTop";

const RegisterPage = () => {
  return (
    <>
      <ScrolltoTop />
      <RegisterComponent />
      <FooterSection />
    </>
  );
};

export default RegisterPage;
