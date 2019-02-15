import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchContainer from "../Container/SearchContainer";
const Header = props => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderItem>Trending GIFS</HeaderItem>
      </Link>
      <HeaderItem>
        <SearchContainer />
      </HeaderItem>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background-color: #f7f7f7;
`;

const HeaderItem = styled.h2`
  font-size: 18px;
  margin: 15px;
  color: black;
`;
export default Header;
