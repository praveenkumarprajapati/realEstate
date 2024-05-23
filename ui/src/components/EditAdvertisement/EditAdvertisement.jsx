import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { getAdvertisementById } from "../../Api/api";
import { TextInput } from "../Inputs/TextInput";

const EditAdvertisement = ({ isNew }) => {
  const { register, handleSubmit, formState: state, setValue } = useForm();
  const match = useRouteMatch();
  const id = match?.params?.id;
  const [error, setError] = useState(false);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const a = await getAdvertisementById(id);
          Object.keys(a).forEach((key) => {
            console.log(key, a[key]);
          });
        } catch (err) {
          setError(true);
        }
      }
    })();
  }, [id, setValue]);
  const onSubmit = handleSubmit(async (advertisement) => {
    try {
      if (isNew) {
        await axios.post("http://localhost:8000/", advertisement, {
          headers: {
            "content-type": "application/json",
          },
        });
        toast.success("Advertisement Created Successfully");
        history.push("/");
      } else {
        await axios.put(`http://localhost:8000/${id}`, advertisement);
        toast.success("Advertisement Updated Successfully");
        history.push(`/showAdvertisement/${id}`);
      }
    } catch (err) {
      toast.error("Error in Updating Advertisement", err.message || err.error);
      console.log(err);
    }
  });
  if (error) {
    return (
      <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
        <h3 className="display-4"> :( Advertisement Not Available</h3>
      </div>
    );
  }
  return (
    <div className="container-fluid bg-secondary d-flex flex-column justify-content-center align-items-center py-2 body-style">
      <div className="shadow rounded text-light form-style w-100">
        <h3 className="h-3 p-4">Update Advertisement</h3>
        <form onSubmit={onSubmit} className="shadow p-4">
          <TextInput
            register={register}
            label={"Name"}
            name={"name"}
            placeholder={"Enter Name"}
          />

          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Property Type
            </label>
            <select
              {...register("type", {
                required: true,
                defaultValue: state.type,
              })}
              name="type"
              id="type"
              placeholder={state.type}
              className="form-select bg-transparent text-light"
              area-described-by="type-info"
            >
              <option>Flat</option>
              <option>Shop</option>
              <option>Bunglow</option>
              <option>Garden Hall</option>
              <option>Villa</option>
            </select>
          </div>

          <TextInput
            register={register}
            label={"Address"}
            name={"address"}
            placeholder={state.address}
          />

          <div className="mb-3">
            <label htmlFor="sorr" className="form-label">
              Sell or Rent
            </label>
            <select
              {...register("sorr", { required: true })}
              name="sorr"
              id="sorr"
              className="form-select bg-transparent text-light"
              defaultValue={state.sorr}
              area-described-by="sorr-info"
            >
              <option>For Sell</option>
              <option>For Rent</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="size" className="form-label">
              Size in Sq Feet
            </label>
            <input
              {...register("size", {
                required: true,
                defaultValue: state.size,
              })}
              type="number"
              name="size"
              id="size"
              placeholder={state.size}
              defaultValue={state.size}
              className="form-control bg-transparent text-light"
              area-described-by="price-info"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Rent Amount
            </label>
            <input
              {...register("price", {
                required: true,
                defaultValue: state.price,
              })}
              type="number"
              name="price"
              placeholder={state.price}
              defaultValue={state.price}
              id="price"
              className="form-control bg-transparent text-light"
              area-described-by="price-info"
            ></input>
          </div>

          <TextInput
            register={register}
            label={"Owner Name"}
            name={"owner"}
            placeholder={state.owner}
          />

          <div className="mb-3">
            <label htmlFor="ownercontact" className="form-label">
              Mobile No.
            </label>
            <input
              {...register("ownercontact", { required: true })}
              type="number"
              name="ownercontact"
              id="ownercontact"
              placeholder={state.ownercontact}
              defaultValue={state.ownercontact}
              className="form-control bg-transparent text-light"
              area-described-by="ownercontact-info"
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="furniture" className="form-label">
              Furniture
            </label>
            <select
              {...register("furniture", { required: true })}
              name="furniture"
              id="furniture"
              className="form-select bg-transparent text-light"
              defaultValue={state.furniture}
              area-described-by="furniture-info"
            >
              <option>Not available</option>
              <option>Full Furnished</option>
              <option>Semi Furnished</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditAdvertisement;
