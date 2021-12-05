import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./globalStyles";
import Home from "./Home";
import Header from "./Header";
import Paintings from "./Paintings";
import Textiles from "./Textiles";
import Music from "./Music";
import Garments from "./Garments";
import Misc from "./Misc";
import Shop from "./Shop";
import EarlyWork from "./EarlyWork";
import DetailsPage from "./DetailsPage";
import ShopDetailsPage from "./ShopDetailsPage";
import Contact from "./contact";
import ShopData from "./data/shop";
import PeaceData from "./data/peacefulness";

import EarlyWorkData from "./data/earlywork";
import GarmentData from "./data/garments";
import Ovenside from "./painting-series/Ovenside";
import Vips from "./painting-series/Vips";
import Peacefulness from "./painting-series/Peacefulness";
import Deconfinement from "./painting-series/Deconfinement";

import About from "./About";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/paint">
          <Paintings />
        </Route>
        <Route exact path="/paint/deconfinement">
          <Deconfinement />
        </Route>
        <Route exact path="/paint/instances-of-peacefulness">
          <Peacefulness data={PeaceData} />
        </Route>
        <Route exact path="/paint/vips">
          <Vips />
        </Route>
        <Route exact path="/paint/ovenside">
          <Ovenside />
        </Route>
        <Route exact path="/garment">
          <Garments data={GarmentData} />
        </Route>
        <Route exact path="/textile">
          <Textiles />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/misc">
          <Misc />
        </Route>
        <Route exact path="/shop">
          <Shop shopdata={ShopData} />
        </Route>
        <Route exact path="/earlywork">
          <EarlyWork earlyworkdata={EarlyWorkData} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/earlywork/details/:title">
          <DetailsPage data={EarlyWorkData} />
        </Route>
        <Route exact path="/garment/details/:title">
          <DetailsPage data={GarmentData} />
        </Route>
        <Route exact path="/shop/details/:title">
          <ShopDetailsPage shopdata={ShopData} />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
const Footer = styled.div`
  height: 100px;
`;

export default App;
