import React, { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router-dom';

const EditP = ({ props }) => {
    const match = useRouteMatch()
    const id = match.params.id;

    const [add, setAdd] = useState([]);
    useEffect(() => {


        fetch(`http://localhost:8000/add/${id}`).then((res) => {
            setAdd(JSON.stringify(res))
            console.log(JSON.stringify(res))
        }).catch((err) => {
            console.log(err)
        });

    }, [id]);

    return (
        <div className="container">
            <h3>Property Details</h3>
            {add.name}
        </div>
    );
}

export default EditP;