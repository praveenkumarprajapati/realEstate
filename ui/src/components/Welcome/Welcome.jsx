import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <Fragment>
      <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-start welcome-back">
        <div className="d-flex p-1 flex-column justify-content-center align-items-start welcome-front">
          <h3 className="display-1">Welcome Ji!</h3>
          <h6 className="h4">Buy and Sell Properties Easily</h6>
          <p className="lead">House Bungalows Shop for Rent and Buy</p>
          <p className="lead">Put your property for Rent or Sell</p>
          <div className="container d-flex felx-row justify-content-start align-items-start">
            <Link to="/createAdvertisement">
              <button className="myButton">I want to sell</button>
            </Link>
            <a href="#allAdd">
              <button className="myButton">In want to buy</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
