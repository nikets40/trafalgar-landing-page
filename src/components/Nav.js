import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavBar>
      <Logo>
        <img alt="log" src="trafalgar-landing-page/images/logo.svg" />
      </Logo>

      <NavMenu>
        <a href="/">Home</a>
        <a href="find-a-doctor">Find a doctor</a>
        <a href="apps">Apps</a>
        <a href="testimonials">Testimonials</a>
        <a href="about-us">About us</a>
      </NavMenu>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.div`
  display: flex;
  height: 70px;
  max-width: 1280px;
  margin: auto;
  padding: 0 50px;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  cursor: pointer;
`;

const NavMenu = styled.div`
  a:first-child {
    font-weight: 900;
    color: #1f1534;
  }
  a {
    margin-left: 1.6rem;
    font-size: 18px;
    color: rgba(31, 21, 52, 0.5);
    font-weight: 400;
    transition: all 250ms;

    &:hover {
        color: rgba(31, 21, 52, 1);
    font-weight: 700;
    }
  }

  @media (max-width: 768px) {
      display: none;
  }
`;
