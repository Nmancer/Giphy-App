import React from "react";
import TrendingContainer from "./Container/TrendingContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Presentational/Header";
import SearchPage from "./Container/SearchPage";
import "../styles/App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={TrendingContainer} />
            <Route path="/search" component={SearchPage} />
            <Route component={TrendingContainer} />
          </Switch>
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
