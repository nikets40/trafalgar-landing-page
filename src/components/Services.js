import React from "react";
import styled from "styled-components";

function Services() {
  const sectionDescription =
    "We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health";
  const icons = [
    "trafalgar-landing-page/images/search-doctor.png",
    "trafalgar-landing-page/images/pharmacy.png",
    "trafalgar-landing-page/images/consultation.png",
    "trafalgar-landing-page/images/details-info.png",
    "trafalgar-landing-page/images/emergency-care.png",
    "trafalgar-landing-page/images/tracking.png",
  ];

  const serviceNames = [
    "Search Doctor",
    "Online Pharmacy",
    "Consultation",
    "Details Info",
    "Emergency Care",
    "Tracking",
  ];

  const serviceDescriptions = [
    "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    "Buy  your medicines with our mobile application with a simple delivery system",
    "Free consultation with our trusted doctors and get the best recomendations",
    "Free consultation with our trusted doctors and get the best recomendations",
    "You can get 24/7 urgent care for yourself or your children and your lovely family",
    "Track and save your medical history and health data.",
  ];

  var allServices = [];
  for (var i = 0; i < 6; i++) {
    allServices.push(
      <ServiceCard>
        <IconBox>
          <img alt="" src={icons[i]} />
        </IconBox>
        <span>{serviceNames[i]}</span>
        <p>{serviceDescriptions[i]}</p>
      </ServiceCard>
    );
  }

  return (
    <Container>
      <span>Our Services</span>
      <br />
      <p>{sectionDescription}</p>

      <AllServices>{allServices}</AllServices>

      <LearnMoreButton>Learn More</LearnMoreButton>
    </Container>
  );
}

export default Services;

const Container = styled.div`
  max-width: 1280px;
  margin: 100px auto 0;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    position: relative;
  }

  br {
    margin: 26px auto 10px;
    width: 56px;
    height: 2px;
    background-color: black;
    content: "";
  }

  p {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    line-height: 30px;
    color: #7d7987;
  }
`;

const AllServices = styled.div`
  display: grid;
  margin-bottom: 70px;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (min-width: 820px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
`;

const IconBox = styled.div`
  height: 70px;
  width: 70px;
`;

const ServiceCard = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 50px 40px 20px;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  font-size: 3rem;
  color: #fff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4),
    -10px -40px 50px rgba(229, 233, 246, 0.2);
  height: 100%;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    transform: scale(1.04);
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.8),
      -10px -40px 50px rgba(229, 233, 246, 0.4);
  }

  span {
    font-size: 24px;
    font-weight: 700;
    /* line-height: 56px; */
    margin-top: 20px;
    color: black;
    text-align: left;
  }
  p {
    margin-top: 10px;
    text-align: start;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

const LearnMoreButton = styled.button`
  margin:auto;
  border: 1.4px solid #458ff6;
  background-color: white;
  color: #458ff6;
  border-radius: 100px;
  width: 200px;
  height: 56px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: #458ff6;
    color: white;
    transform: scale(1.04);
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  }
`;
