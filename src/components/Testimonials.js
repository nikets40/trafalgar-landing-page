import React from "react";
import styled from "styled-components";

function Testimonials() {
  return (
    <Container>
      <GradientBox>
        <h3>What our customer are saying</h3>
        <Divider />
        <Testimonial>
          <UserData>
            <img alt="avatar" src="/images/user-image.png" />
            <div>
              <h4>Edward Newgate</h4>
              <h5>Founder Circle</h5>
            </div>
          </UserData>

          <Comment>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </Comment>
        </Testimonial>
      </GradientBox>
    </Container>
  );
}

export default Testimonials;

const Container = styled.div`
  max-width: 1280px;
  margin: 150px auto;
  padding: 0 50px;
`;

const Divider = styled.div`
  margin: 0 auto 40px;
  width: 56px;
  height: 2px;
  border-radius: 100px;
  background-color: white;
  content: "";
`;

const GradientBox = styled.div`
  background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
  border-radius: 24px;

  h3 {
    color: white;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    line-height: 38px;
    padding: 40px 40px 0 40px;
  }
`;

const Testimonial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  /* background-color: red; */

  img {
    width: 133px;
    height: 133px;
    border: 5px solid white;
    border-radius: 50%;
    margin: 0 20px;
  }

  h4 {
    font-size: 22px;
    font-weight: 700;
    color: white;
    margin-bottom: 0;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    margin-top: 10px;
  }
`;

const Comment = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 19px;
  line-height: 30px;
  font-weight: 400;
  margin: 40px;
  max-width: 520px;
  @media(max-width:768px){
    margin: 20px 40px 40px;
    max-width: 100%;
  }
 
`;
