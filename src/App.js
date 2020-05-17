import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import FoodDonate from "./Components/FoodDonate";
import ClothesDonate from "./Components/ClothesDonate";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import NotFoundPage from "./Components/NotFoundPage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SampleFetchApi from "./Components/SampleFetchApi";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/food" component={FoodDonate} />
          <Route path="/clothes" component={ClothesDonate} />
          <Route component={NotFoundPage} />
        </Switch>
        <SampleFetchApi />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
