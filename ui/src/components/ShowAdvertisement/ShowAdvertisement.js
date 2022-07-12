import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';


//Material
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { getAdvertisementById } from '../../Api/api';


const ShowAdvertisement = ({ props }) => {
    const match = useRouteMatch()
    const id = match.params.id;
    const [advertise, setState] = useState([]);
    const history = useHistory()

    useEffect(() => {
        (
            async () => {
                const a = await getAdvertisementById(id)
                console.log("After waiting ", a)
                setState(a);
            }
        )()

    }, [id]);



    const deleteClicked = () => {
        axios.delete(`http://localhost:8000/${advertise._id}`).then(res => {
            alert("Deleted SuccessFully")
            setTimeout(() => history.push('/'), 1000)

        }).catch(err => {
            setTimeout(() => history.push('/'), 1000)
        })
    }

    const editClicked = () => {

    }

    if (advertise) {
        let furniture;
        if (advertise.furniture === "Yes") {
            furniture = <span className="display-6">Furniture Available</span>
        }
        else {
            furniture = <span className="display-6">Furniture Not Available</span>
        }
        return (
            <div className="container-fluid bg-info m-0 p-5">
                <div className="container shadow bg-light rounded text-dark d-flex flex-l-row flex-column p-5 my-5">
                    <div className="d-flex flex-column flex-xl-row  align-items-center justify-content-between ">
                        <div className="d-flex flex-column">
                            <h3 className="h3">{advertise.type} <small>at</small> {advertise.address}</h3>
                            <h6>Available for <span> {advertise.sorr}</span></h6>
                            <h1 className="display-1 text-success" ><span className="display-6">&#8377;</span>{advertise.price}.00 </h1>
                            <span className="display-6">Size {advertise.size} <span className="badge bg-warning p-1"> Sq Feet</span></span>
                            {furniture}

                        </div>
                        <div className="">
                            <img width="400px" alt="Property" src="https://source.unsplash.com/260x160/?house,flat" />
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <p className="h3">Owner <span className="display-5 ">{advertise.owner}</span></p>
                        <h6>Owner Contact: <span>{advertise.ownercontact}</span></h6>
                    </div>
                    <div className="d-flex flex-row justify-center">
                        <Button
                            onClick={() => { deleteClicked() }}
                            variant="contained"
                            color="secondary"
                            className="m-3"
                        >
                            <DeleteOutlinedIcon />
                        </Button>
                        <Link to={`/editAdvertisement/${advertise._id}`}>
                            <Button
                                onClick={() => { editClicked() }}
                                variant="contained"
                                color="primary"
                                className="m-3"
                            >
                                <EditIcon />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div >
        );
    } else {
        return (
            <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
                <h3 className="display-4"> :( Advertisement Not Available</h3>
            </div>
        )
    }
}

export default ShowAdvertisement;