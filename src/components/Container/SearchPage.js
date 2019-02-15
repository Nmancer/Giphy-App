import React from "react";
import RenderGifs from "../Presentational/RenderGifs";
import { connect } from "react-redux";

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.results.data ? (
          <RenderGifs data={this.props.results.data} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.searchResults
  };
};
export default connect(
  mapStateToProps,
  null
)(SearchPage);
