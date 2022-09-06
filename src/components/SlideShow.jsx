import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";

//ERROR : DATA IN SLIDESHOW DON`T SHOW "2ND & 3RD SLIDE".

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideNumber * -100}vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; // check with js the propery "direction" to handle the position of the arrows.
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.35;
  z-index: 2;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 30px;
  max-width: 70%;
`;

const ShopNowBtn = styled.button`
  padding: 10px;
  border: 1px solid lightgray;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.2px;
`;

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      {sliderItems.map((item) => (
        <Wrapper slideNumber={slideIndex}>
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="Model Picture" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <ShopNowBtn>SHOP NOW</ShopNowBtn>
            </InfoContainer>
          </Slide>
        </Wrapper>
      ))}

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default SlideShow;
