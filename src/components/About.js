import React from "react";
import styled from "styled-components";
import healthcareImg from "../images/leading-healthcare-provider.png";
import downloadAppImg from "../images/download-app.png";

function About() {
  return (
    <div>
      <Container>
        <Data>
          <Title>Leading healthcare providers</Title>
          <br />
          <SubTitle>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </SubTitle>

          <CtaButton>Learn More</CtaButton>
        </Data>

        <Image>
          <img alt="hero-pic" src={healthcareImg} />
        </Image>
      </Container>

      <Container>
        <Data>
          <Title>Download our mobile apps</Title>
          <br />
          <SubTitle>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </SubTitle>

          <CtaButton>Download</CtaButton>
        </Data>

        <Image>
          <img alt="hero-pic" src={downloadAppImg} />
        </Image>
      </Container>
    </div>
  );
}

export default About;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 200px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(1) {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      margin-top: 100px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 100px;
  }
`;

const Data = styled.div`
  max-width: 430px;
  min-width: 320px;
  display: flex;
  flex-direction: column;

  br {
    margin: 20px 0 5px;
    width: 56px;
    height: 2px;
    border-radius: 100px;
    background-color: black;
    content: "";
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Image = styled.div`
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
  font-size: 36px;
  font-weight: 700;
  line-height: 56px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const SubTitle = styled.span`
  margin-top: 25px;
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
  color: #7d7987; ;
`;

const CtaButton = styled.button`
  background-color: white;
  margin-top: 28px;
  border: 2px solid #458ff6;

  border-radius: 100px;
  color: #458ff6;
  height: 50px;
  width: 200px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    border: none;
    background-color: #458ff6;
    color: white;
    transform: scale(1.08);
  }
`;
