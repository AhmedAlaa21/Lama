import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import styledComp from "styled-components";

// Done.. input field need to be edited

const Container = styledComp.div`
  height: 60px;
`;

const Wrapper = styledComp.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//start left side..
const Left = styledComp.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lang = styledComp.span`
  font-size: 14;
  cursor: pointer;
  margin-right: 20px;
`;

const SearchContainer = styledComp.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styledComp.input`
  border: none;
`;

//end left side.

//start Center side..
const Center = styledComp.div`
  flex: 1;
  text-align: center;
`;

const Logo = styledComp.h1`
  font-weight: bold;
  cursor:pointer;
`;

//end #Center side..

//start #Right side..

const Right = styledComp.div`
  flex: 1;
  display:flex;
  justify-content: flex-end;
  align-items:center;
`;

const Register = styledComp.a`
text-decoration:none;
margin-right:25px;
cursor:pointer;
`;

const SignIn = styledComp.a`
text-decoration:none;
margin-right:25px;
cursor:pointer;
`;
//from Material Ui..
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
//end #Right side..

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input className="search-input" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <Register href="../pages/Register.jsx">
            Register
          </Register>
          <SignIn>Sign In</SignIn>
          <CustomizedBadges />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
