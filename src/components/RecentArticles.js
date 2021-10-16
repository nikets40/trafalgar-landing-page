import React from "react";
import styled from "styled-components";

function RecentArticles() {
  return (
    <Container>
      <h3>Check out our latest article</h3>
      <Divider />

      <Articles>
        <Card>
          <img src="/images/blog-1.png" alt="" />
          <h4>Disease detection, check up in the laboratory</h4>
          <h5>
            In this case, the role of the health laboratory is very important to
            do a disease detection...
          </h5>
          <ReadMoreButton>Read More &nbsp;&nbsp; &#8594;</ReadMoreButton>
        </Card>

        <Card>
          <img src="/images/blog-2.png" alt="" />
          <h4>Herbal medicines that are safe for consumption</h4>
          <h5>
            Herbal medicine is very widely used at this time because of its very
            good for your health...
          </h5>
          <ReadMoreButton>Read More &nbsp;&nbsp; &#8594;</ReadMoreButton>
        </Card>

        <Card>
          <img src="/images/blog-3.png" alt="" />
          <h4>Natural care for healthy facial skin</h4>
          <h5>
            A healthy lifestyle should start from now and also for your skin
            health. There are some...
          </h5>
          <ReadMoreButton>Read More &nbsp;&nbsp; &#8594;</ReadMoreButton>
        </Card>
      </Articles>
      <CtaButton>View All</CtaButton>
    </Container>
  );
}

export default RecentArticles;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
    font-size: 36px;
    margin: auto;
    text-align: center;
  }
`;

const Divider = styled.div`
  margin: 24px auto 40px;
  width: 56px;
  height: 2px;
  border-radius: 5px;
  background-color: black;
  content: "";
`;

const Articles = styled.div`
  display: grid;
  margin-bottom: 70px;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Card = styled.div`
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4),
    -10px -40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    transform: scale(1.04);
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.8),
      -10px -40px 50px rgba(229, 233, 246, 0.8);
  }

  img {
    max-height: 250px;
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }

  h4 {
    font-weight: bold;
    font-size: 21px;
    margin: 12px 30px 0;
  }

  h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    color: #7d7987;
    margin: 12px 30px 20px;
  }
`;

const ReadMoreButton = styled.button`
  border: none;
  background-color: white;
  font-weight: 600;
  font-size: 17px;
  color: #4089ed;
  margin: 12px 30px 20px;
  cursor: pointer;
`;

const CtaButton = styled.button`
  background-color: white;
  margin: 28px auto 120px;
  border: 1.4px solid #458ff6;

  border-radius: 100px;
  color: #458ff6;
  height: 50px;
  width: 200px;
  font-weight: 600;
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
