import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #e4ddde;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 1.2px;
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  color: gray;
`;
const EmailContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  flex: 1;
  color: #fff;
  border: none;
  background-color: teal;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <EmailContainer>
        <Input placeholder="Your Email"></Input>
        <SendButton>
          <SendIcon />
        </SendButton>
      </EmailContainer>
    </Container>
  );
};

export default Newsletter;
