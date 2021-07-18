import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { getAdvertisement } from './api'



const Home = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const findItems = async () => {
            const adds = await getAdvertisement()
            setState(adds)
        }
        findItems()
    }, []);


    return (
        <div className="container bg-light p-5">
            <h3> All Advertisements</h3>
            <div className="grid">

                {
                    state.map((prop) => (
                        <div className="card p-3 m-3" key={prop._id}>
                            <div className="card-body">
                                <h4 className="card-title">{prop.name}</h4>
                                <h6 className="card-subtitle">{prop.type} At <span className="card-text badge bg-success">{prop.address}</span></h6>
                                <h3 className="card-title" >{prop.sorr}</h3>
                                <p> &#8377; {prop.price} </p>

                                <Link to={`/editProp/${prop._id}`} className="btn btn-secondary" > Contect Owner </Link>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

        </div>
    );
}

export default Home;