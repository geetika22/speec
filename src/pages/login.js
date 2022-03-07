import React from "react";
import FooterSection from "../components/FooterSection";
import LoginComponent from "../components/LoginSection";
import ScrolltoTop from "../components/ScrollToTop";

const LoginPage = () => {
  return (
    <div>
      <ScrolltoTop />
      <LoginComponent />
      <FooterSection />
    </div>
  );
};

export default LoginPage;
