import React from "react";
import styled from "styled-components";
import About from "./About";
import Hero from "./Hero";
import Nav from "./Nav";
import Services from "./Services";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <Container>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Testimonials/>
    </Container>
  );
}

export default Home;

const Container = styled.div``;
