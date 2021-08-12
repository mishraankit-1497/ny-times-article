import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Articles from "./containers/articles";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <>
      <Router>
        <Header title={"NY Times Most Popular"} />
        <Switch>
          <Route exact path="/">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
