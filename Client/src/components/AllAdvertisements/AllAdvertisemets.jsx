import React from 'react';

import { Link } from 'react-router-dom';


//Material
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';


const AllAdvertisements = ({ advertisements }) => {

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center bg-secondary p-5 text-light" id="allAdd">
            <h3> Properties Available</h3>
            <div className="row container text-dark">
                {
                    advertisements.map((prop) => (
                        <div className="col col-lg-6 col-xl-4 col-12" key={prop._id}>
                            <div className="card p-3 m-2" >
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="card-title">{prop.name}</h4>
                                        <h4><FavoriteBorderTwoToneIcon></FavoriteBorderTwoToneIcon></h4>
                                    </div>
                                    <h6 className="card-subtitle">{prop.type} At <span className="card-text badge bg-success">{prop.address}</span></h6>
                                    <h3 className="card-title" >{prop.sorr}</h3>
                                    <p><span className="display-6"> &#8377;</span> {prop.price} .00 </p>

                                    <Link to={`/showAdvertisement/${prop._id}`} className="btn btn-info" > Contect Owner </Link>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
}

export default AllAdvertisements;