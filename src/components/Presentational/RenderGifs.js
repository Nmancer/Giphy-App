import React from "react";
import styled from "styled-components";
import RenderOneGif from "./RenderOneGif";

const RenderGifs = ({ data, handleImageChange }) => {
  return (
    <GifsGrid>
      {data.map(gif => (
        <RenderOneGif
          gif={gif}
          handleImageChange={handleImageChange}
          key={gif.id}
        />
      ))}
    </GifsGrid>
  );
};
export default RenderGifs;

const GifsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 80%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
