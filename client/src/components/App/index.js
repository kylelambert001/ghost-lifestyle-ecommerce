import React from "react";
import { Switch, Route } from "react-router-dom";

import Banner from "../Banner";
import Navbar from "../Navbar";
import Footer from "../Footer";

import HomePage from "../../pages/HomePage";
import ShoppingPage from "../../pages/ShoppingPage";
import ProductPage from "../../pages/ProductPage";

import UserModal from "../../components/UserModal";

function App(props) {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        {/* <UserModal /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ShoppingPage} />
          <Route exact path="/products/:slug" component={ProductPage} />
          <Route exact path="/404">
            <div>404 page</div>
          </Route>
        </Switch>
      </main>
      <Footer />
      <Banner copyright />
    </>
  );
}

export default App;
