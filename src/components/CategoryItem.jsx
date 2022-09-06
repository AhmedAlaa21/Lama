import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // same as background-size prop.
  scroll-behavior: fixed;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
`;

const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  letter-spacing: 1.7px;
`;

const ShopNow = styled.button`
  background-color: #fff;
  border-radius: 8px;
  border: none;
  color: gray;
  padding: 12px 30px;
  font-size: 20px;
  font-weight: bolder;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <ShopNow>SHOP NOW</ShopNow>
      </Info>
    </Container>
  );
};

export default CategoryItem;
