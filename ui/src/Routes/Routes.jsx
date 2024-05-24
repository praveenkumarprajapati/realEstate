import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./../components/Home/Home";
import ShowAdvertisement from "./../components/ShowAdvertisement/ShowAdvertisement";
import Navbar from "./../components/Navbar/Navbar";
import AdvertisementForm from "../components/AdvertisementForm";

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ marginTop: '70px' }} >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/createAdvertisement">
            <AdvertisementForm isNew />
          </Route>
          <Route path="/showAdvertisement/:id">
            <ShowAdvertisement />
          </Route>
          <Route path="/editAdvertisement/:id">
            <AdvertisementForm />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default Routes;
