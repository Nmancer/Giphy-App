import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchResults } from "../../actions";
import { withRouter } from "react-router-dom";
import RenderSearch from "../Presentational/RenderSearch";

class SearchContainer extends Component {
  state = { value: "" };
  handleChange = event => {
    this.setState({ value: event.target.value }, () =>
      this.props.fetchResults(this.state.value)
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.history.location !== "/search" && this.state.value) {
      this.props.history.push("/search");
    }
  };
  render() {
    return (
      <RenderSearch
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        term={this.state.value}
      />
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchResults }
  )(SearchContainer)
);
