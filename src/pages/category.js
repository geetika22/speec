import React from "react";
import CategoryComponents from "../components/CategoryComponent";
import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import ScrolltoTop from "../components/ScrollToTop";

const Category = () => {
  return (
    <>
      <ScrolltoTop />
      <NavbarSection />
      <CategoryComponents />
      <FooterSection />
    </>
  );
};

export default Category;
