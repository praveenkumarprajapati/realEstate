import React, { useEffect, useState, Fragment } from 'react';


import { getAdvertisement } from './../../Api/api'

import AllAdvertisements from './../AllAdvertisements/AllAdvertisemets'
import Welcome from './../Welcome/Welcome'


const Home = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const findItems = async () => {
            const adds = await getAdvertisement()
            setState(adds)
        }
        try {
            findItems()
        } catch (err) {
            console.log(err)
        }
    }, []);

    if (state) {
        return (
            <Fragment>
                <Welcome />
                <AllAdvertisements advertisements={state} />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Welcome />
                <div className="container d-flex m-5 p-6 justify-content-center align-items-center">
                    <h3>No Advertisements to show</h3>
                </div>
            </Fragment>

        )
    }


}

export default Home;