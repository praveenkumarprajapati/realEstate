import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateNewP = () => {

    const { register, handleSubmit } = useForm()

    const history = useHistory();

    const onSubmit = handleSubmit((advertisement) => {
        axios.post("http://localhost:8000/newAdd",
            JSON.stringify(advertisement), {
            "headers": {
                "content-type": "application/json"
            }
        }).then((res) => {
            return "Sucess"
        }).then((msg) => {
            history.push("/")
        }).catch((err) => {
            console.log(err)
        })
    });

    return (
        <div className="container p-5 ml-5 mr-5">
            <h3 className="h-3 p-4">Create a New Advertisement</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        name="name"
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
                        className="form-control"
                        area-described-by="price-info"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Rent Amount</label>
                    <input
                        {...register('price', { required: true })}
                        type="number"
                        name="price"
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
                <button type="submit" className="btn btn-primary">Submit</button>


            </form>
        </div>
    );
}
export default CreateNewP;