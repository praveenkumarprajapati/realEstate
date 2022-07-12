import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    return (
        <Fragment>
            <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center welcome-back">
                <div className="d-flex p-5 flex-column justify-content-center align-items-center welcome-front">
                    <h3 className="display-1">Welcome Ji...</h3>
                    <p className="lead"> "Properties ki Dukan me AApka Swagat hai."</p>
                    <h6 className="h4"><span className="display-5">"B</span>uy and Sell Properties Easily" </h6>
                    <p className="lead"><span className="h4">H</span>ouse <span className="h4">B</span>unglows <span className="h4">S</span>hop for Rent and Buy</p>
                    <p className="lead">Put your property for Rent or Sell</p>

                    <div className="container p3 d-flex felx-row justify-content-around align-items-center">

                        <Link to='/createAdvertisement'><button className="myButton">Sell</button></Link>
                        <a href="#allAdd"><button className="myButton">Buy</button></a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Welcome;