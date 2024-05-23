import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./../components/Home/Home";
import ShowAdvertisement from "./../components/ShowAdvertisement/ShowAdvertisement";
import Navbar from "./../components/Navbar/Navbar";
import EditAdvertisement from "./../components/EditAdvertisement/EditAdvertisement";

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createAdvertisement">
          <EditAdvertisement isNew />
        </Route>
        <Route path="/showAdvertisement/:id">
          <ShowAdvertisement />
        </Route>
        <Route path="/editAdvertisement/:id">
          <EditAdvertisement />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
