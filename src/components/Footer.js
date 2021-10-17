import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <GradientBackground>
      <Container>
        <Column>
          <img alt="" src="/images/logo-white.svg" />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
        </Column>

        <Column>
          <h5>Company</h5>
          <a href="/">About</a>
          <a href="/">Testimonial</a>
          <a href="/">Find a doctor</a>
          <a href="/">Apps</a>
        </Column>

        <Column>
          <h5>Region</h5>
          <a href="/">Indonesia</a>
          <a href="/">Singapore</a>
          <a href="/">Hong Kong</a>
          <a href="/">Canada</a>
        </Column>

        <Column>
          <h5>Help</h5>
          <a href="/">Help Center</a>
          <a href="/">Contact Support</a>
          <a href="/">Instructions</a>
          <a href="/">How it works</a>
        </Column>
      </Container>
    </GradientBackground>
  );
}

export default Footer;

const GradientBackground = styled.div`
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
`;

const Container = styled.div`
  max-width: 1280px;
  padding: 100px 50px;
  margin: auto;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

  img {
    max-width: 280px;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    max-width: 390px;
    color: white;
  }

  a,
  span {
    font-weight: 300;
    font-size: 16px;
    color: white;
  }
  a {
    margin-bottom: 25px;
    cursor: pointer;
  }

  h5 {
    font-weight: bold;
    font-size: 20px;
    color: white;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    grid-column: span 2;
  }
`;
