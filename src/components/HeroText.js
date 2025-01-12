import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Coding Workshops for Women</h5>
      <h1>Code</h1>
      <h1>Anything.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <BtnContainer>
        <button className="readmore">Read More</button>
        <button>7 Day Free Trial</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background:  #f774c5;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem ;
    box-shadow: 0px 13px 24px -7px #f774c5;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px  #f774c5;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: white;
    background: transparent;
    border: 3px solid #f774c5;
    &:hover {
      box-shadow: 0px 17px 16px -11px #f774c5;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
