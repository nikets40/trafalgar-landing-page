import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Nav from "./Nav";

function Home() {
  return (
    <Container>
      <Nav />
      <Hero />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
