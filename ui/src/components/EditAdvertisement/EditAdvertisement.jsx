import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'

import './../CreateAdvertisement/CreateAdvertisement.css'

import { getAdvertisementById } from '../../Api/api';

const EditAdvertisement = ({ advertiseToEdit }) => {

    const [state, setState] = useState([]);
    const { register, handleSubmit } = useForm()
    const match = useRouteMatch()
    const id = match.params.id

    const history = useHistory();

    useEffect(() => {
        (
            async () => {
                const a = await getAdvertisementById(id)
                console.log("After waiting ", a)
                setState(a);

            }
        )()
    }, [id]);

    const onSubmit = handleSubmit(async (advertisement) => {
        try {
            await axios.put(`http://localhost:8000/${state._id}`, advertisement);
            alert("Sucessfully Updated")
            history.push(`/showAdvertisement/${id}`);

        } catch (err) {
            console.log(err)
        }
    });

    if (state) {
        if (state.error === "true") {
            return (
                <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
                    <h3 className="display-4"> :( Advertisement Not Available</h3>
                </div>)
        }
        else {
            return (
                <div className="container-fluid bg-secondary d-flex flex-column justify-content-center align-items-center py-5 body-style">
                    <div className="shadow rounded text-light form-style">
                        <h3 className="h-3 p-4">Update Advertisement</h3>
                        <form onSubmit={onSubmit} className="shadow p-4">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    {...register('name', { required: true })}
                                    type="text"
                                    name="name"
                                    placeholder={state.name}
                                    id="name"
                                    className="form-control"
                                    area-described-by="name-info"></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Property Type</label>
                                <select
                                    {...register('type', { required: true })}
                                    name="type"
                                    id="type"
                                    placeholder={state.type}
                                    className="form-select"
                                    area-described-by="type-info">
                                    <option>Flat</option>
                                    <option>Shop</option>
                                    <option>Bunglow</option>
                                    <option>Garden Hall</option>
                                    <option>Villa</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    {...register('address', { required: true })}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder={state.address}
                                    className="form-control"
                                    area-described-by="addres-info"></input>

                            </div>

                            <div className="mb-3">
                                <label htmlFor="sorr" className="form-label">Sell or Rent</label>
                                <select
                                    {...register('sorr', { required: true })}
                                    name="sorr"
                                    id="sorr"
                                    className="form-select"
                                    area-described-by="sorr-info">
                                    <option>For Sell</option>
                                    <option>For Rent</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="size" className="form-label">Size in Sq Feet</label>
                                <input
                                    {...register('size', { required: true })}
                                    type="number"
                                    name="size"
                                    id="size"
                                    placeholder={state.size}
                                    className="form-control"
                                    area-described-by="price-info"></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Rent Amount</label>
                                <input
                                    {...register('price', { required: true })}
                                    type="number"
                                    name="price"
                                    placeholder={state.price}
                                    id="price"
                                    className="form-control"
                                    area-described-by="price-info"></input>

                            </div>

                            <div className="mb-3">
                                <label htmlFor="owner" className="form-label">Your Name</label>
                                <input
                                    {...register('owner', { required: true })}
                                    type="text"
                                    name="owner"
                                    placeholder={state.owner}
                                    id="owner"
                                    className="form-control"
                                    area-described-by="owner-info"></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ownercontact" className="form-label">Mobile No.</label>
                                <input
                                    {...register('ownercontact', { required: true })}
                                    type="text"
                                    name="ownercontact"
                                    id="ownercontact"
                                    placeholder={state.ownercontact}
                                    className="form-control"
                                    area-described-by="ownercontact-info"></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="furniture" className="form-label">Is furniture avilable?</label>
                                <select
                                    {...register('furniture', { required: true })}
                                    name="furniture"
                                    id="furniture"
                                    className="form-select"
                                    area-described-by="furniture-info">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </form>

                    </div>

                </div>
            );
        }
    } else {
        return (
            <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
                <h3 className="display-4"> Error: 404</h3>
            </div>)
    }


}
export default EditAdvertisement;