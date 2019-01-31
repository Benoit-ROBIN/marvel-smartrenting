import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from './createStore'

import "./App.css";
import IndexPage from "./pages/index";
import HeaderBarComponent from "./components/header";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={styles.root}>
            <HeaderBarComponent />
            <Route path="/" exact component={IndexPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

const styles = {
  root: {
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    backgroundColor: "black"
  }
};

export default App;