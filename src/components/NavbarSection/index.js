/* eslint-disable no-const-assign */
import React from "react";

import {
  NavbarContainer,
  NavbarLinksContainer,
  NavbarLoginButton,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarRegisterButton,
} from "./NavbarElements";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLogoContainer>
          <Link to={"/"}>
            <NavbarLogo src={logo} />
          </Link>
        </NavbarLogoContainer>
        <NavbarLinksContainer>
          <Link to="/login" onClick={() => localStorage.clear()}>
            <NavbarLoginButton>
              {localStorage.length === 0 ? "Login" : "Logout"}
            </NavbarLoginButton>
          </Link>
          <Link to="/register">
            <NavbarRegisterButton>
              {localStorage.length === 0
                ? "Register"
                : localStorage.getItem("rollno")}
            </NavbarRegisterButton>
          </Link>
        </NavbarLinksContainer>
      </NavbarContainer>
    </>
  );
};

export default NavbarSection;
