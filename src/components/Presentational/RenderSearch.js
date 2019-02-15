import React from "react";
import styled from "styled-components";

const RenderSearch = props => {
  return (
    <SearchForm onSubmit={props.onSubmit}>
      <SearchBar
        placeholder="search"
        type="text"
        value={props.term}
        onChange={props.handleChange}
      />
    </SearchForm>
  );
};

const SearchBar = styled.input`
  padding: 5px;
  width: 140px;
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition: 0.5s all;
  :focus {
    width: 180px;
  }
  ::placeholder {
    color: black;
  }
`;

const SearchForm = styled.form``;

export default RenderSearch;
