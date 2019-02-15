import React, { Component } from "react";
import styled from "styled-components";
const generateColor = () => {
  const colors = ["#2ecc71", "#fef160", "#f03434", "#6bb9f0", "#a537fd"];
  return colors[Math.floor(Math.random() * 5)];
};

class RenderOneGif extends Component {
  state = { color: generateColor() };
  render() {
    const { gif, handleImageChange } = this.props;
    return (
      <SingeGifWrapper
        gifWidth={gif.images.fixed_height.width}
        gifHeight={gif.images.fixed_height.height}
        bgColor={this.state.color}
      >
        <img
          src={gif.images.fixed_height.url}
          onLoad={handleImageChange}
          onError={handleImageChange}
          alt={gif.title}
        />
      </SingeGifWrapper>
    );
  }
}
const SingeGifWrapper = styled.div`
  margin: 10px;
  width: ${props => props.gifWidth}px;
  height: ${props => props.gifHeight}px;
  background-color: ${props => props.bgColor};
`;

export default RenderOneGif;
