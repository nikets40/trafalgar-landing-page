import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <Cta>
        <Title>Virtual healthcare for you</Title>
        <SubTitle>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </SubTitle>

        <CtaButton>Consult Today</CtaButton>
      </Cta>

      <HeroImg>
        <img alt="hero-pic" src="trafalgar-landing-page/images/hero-img.png" />
      </HeroImg>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width:768px){
    flex-direction: column-reverse;
  }
`;

const Cta = styled.div`
  max-width: 430px;
  min-width: 320px;
  display: flex;
  flex-direction: column;

  @media(max-width:768px){
    max-width: 100%;
  }
`;
const HeroImg = styled.div`
  height: auto;
  max-width: 693px;
  min-width: 200px;
  max-height: 598px;


  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
`;
const SubTitle = styled.span`
  margin-top: 25px;
  font-size: 21px;
  font-weight: 300;
  line-height: 32px;
  color: #7d7987; ;
`;

const CtaButton = styled.button`
  background-color: #458ff6;
  margin-top: 48px;
  border: none;
  border-radius: 100px;
  color: white;
  height: 50px;
  width: 200px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;

  &:hover{
      border:2px solid #458ff6;
      background-color: white;
      color: #458ff6;
      transform:scale(1.08) ;
  }
`;
