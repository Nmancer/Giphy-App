import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTrending } from "../../actions";
import Loader from "../Presentational/Loader";
import _throttle from "lodash/throttle";
import RenderGifs from "../Presentational/RenderGifs";
class TrendingContainer extends Component {
  state = { loading: true };
  componentDidMount = () => {
    window.addEventListener("scroll", _throttle(this.handleScrolling, 400));
    this.loadGifs(true);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", _throttle(this.handleScrolling, 400));
  }
  handleImageChange = () => {
    this.setState({
      loading: !this.imagesLoaded(this.galleryElement)
    });
  };

  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return <Loader />;
  }
  imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (let i = 0; i < imgElements.length; i += 1) {
      const img = imgElements[i];
      if (!img.complete) {
        return false;
      }
    }
    return true;
  }
  loadGifs = hmm => {
    this.props.fetchTrending(hmm);
  };

  handleScrolling = () => {
    if (
      window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 300 &&
      !this.state.loading
    ) {
      this.loadGifs(false);
    }
  };

  render() {
    return (
      <div
        ref={element => {
          this.galleryElement = element;
        }}
      >
        {this.props.trending.data && (
          <RenderGifs
            data={this.props.trending.data}
            handleImageChange={this.handleImageChange}
          />
        )}
        {this.renderSpinner()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trending: state.trending
  };
};
export default connect(
  mapStateToProps,
  { fetchTrending }
)(TrendingContainer);
