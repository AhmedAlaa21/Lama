import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: teal;
    text-align: center;
    width: 100%;
    color: #fff;
    padding: 5px 0;
    font-weight: 500;
    font-size: 14px ;
    cursor: pointer;
`
const OfferBanner = () => {
  return (
    <Container>Special Deals! Free Shipping for Orders Over $50</Container>
  )
}

export default OfferBanner