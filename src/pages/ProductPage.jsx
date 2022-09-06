import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
`;

const AlternativeImageContainer = styled.div`
  background-color: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 90vh;
`;

const AlternativeImage = styled.img`
  width: 100%;
  height: 30vh;
  cursor: pointer;
  margin-bottom: 5px;
  transition: all 0.2s ease-in;
  &:hover{
    transform: scale(1.2);
  }
`;

const Image = styled.img`
  flex: 2;
  height: 90vh;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  padding: 0px 50px;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  font-size: 14px;
  max-width: 60%;
  letter-spacing: 1.2px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const FilterTitle = styled.h2`
  color: gray;
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 1.2px;
`;

const FilterColor = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.5 ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const FilterSize = styled.select`
  padding: 8px;
`;
const SizeOptions = styled.option``;

const AmountContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  text-align: center;
  padding: 6px;
  &:hover {
    background-color: lightgrey;
  }
`;

const Counter = styled.span`
  // editale numbers only ..
  cursor: pointer;
  border: 1px solid gray;
  padding: 8px 12px;
  border-radius: 8px;
`;

const AddToCartBtn = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Navbar />
      <OfferBanner />
      <Wrapper>
        <ImageContainer>
          <AlternativeImageContainer>
            <AlternativeImage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            <AlternativeImage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            <AlternativeImage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </AlternativeImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <Info>
          <Title>Denim Jumpsuit</Title>
          <Description>
            This is just a placeholder where we will put item`s description.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            eveniet sit veniam earum, ad possimus accusantium blanditiis vitae
            asperiores ab sint dolorum. Suscipit odit explicabo magnam et
            debitis, eum natus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facere perferendis, ipsum a neque ratione earum?
            Officia quasi nobis possimus ipsum corporis repellendus quis
            doloribus odit animi. Fugit dicta exercitationem enim. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nobis perspiciatis,
            officiis blanditiis soluta, quibusdam tempora tenetur necessitatibus
            quo iste atque deserunt magnam? Corrupti natus, fugiat amet facere
            dolore aperiam voluptates. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Doloribus error pariatur est esse explicabo
            laboriosam quia ullam quis accusamus deserunt blanditiis adipisci
            enim, iusto deleniti, nihil incidunt sapiente fuga possimus? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quibusdam ad dolorem? Quisquam itaque modi nemo et ut mollitia,
            error, pariatur vero vitae exercitationem quod dolor atque ad
            similique? Non?
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <FilterTitle>Color</FilterTitle>
            <abbr title="Black">
              <FilterColor color="black"></FilterColor>
            </abbr>
            <abbr title="Dark Blue">
              <FilterColor color="darkblue"></FilterColor>
            </abbr>
            <abbr title="Gray">
              <FilterColor color="gray"></FilterColor>
            </abbr>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <SizeOptions>XS</SizeOptions>
              <SizeOptions>S</SizeOptions>
              <SizeOptions>M</SizeOptions>
              <SizeOptions>L</SizeOptions>
              <SizeOptions>XL</SizeOptions>
            </FilterSize>
          </FilterContainer>
          <AmountContainer>
            <Icon>
              <Remove />
            </Icon>
            <Counter>1</Counter>
            <Icon>
              <Add />
            </Icon>
            <AddToCartBtn>ADD TO CART</AddToCartBtn>
          </AmountContainer>
        </Info>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
