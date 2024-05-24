import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { getAdvertisementById } from "../../Api/api";
import { TextInput } from "../Inputs/TextInput";
import { SelectInput } from "../Inputs/SelectInput";
import { NumberInput } from "../Inputs/NumberInput";
import { API_URL } from "../../constants";

const AdvertisementForm = ({ isNew }) => {
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
        await axios.post(API_URL, advertisement, {
          headers: {
            "content-type": "application/json",
          },
        });
        toast.success("Advertisement Created Successfully");
        history.push("/");
      } else {
        await axios.put(`${API_URL}/${id}`, advertisement);
        toast.success("Advertisement Updated Successfully");
        history.push(`/showAdvertisement/${id}`);
      }
    } catch (err) {
      toast.error("Error in Updating Advertisement", err.message || err.error);
    }
  });
  if (error) {
    return (
      <div className="container p-5 m-5 d-flex justify-content-center align-items-center">
        <h3 className="display-4"> :( Advertisement Not Available</h3>
      </div>
    );
  }
  const goBack = () => history.goBack();
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-2 body-style">
      <div className="w-100 rounded sm-w-100 md-w-50">
        <button onClick={goBack} className="btn pointer btn-link bold">
          <BsArrowLeft className="mr-2" />
          <span className="ml-2">back</span>
        </button>
        <h3 className="h-3 py-3">
          {isNew ? "Add new Property" : "Update Property"}
        </h3>
        <form onSubmit={onSubmit} className="shadow p-4">
          <TextInput
            register={register}
            label={"Property Name"}
            name={"name"}
            placeholder={"Enter Name"}
          />

          <SelectInput
            label="Property Type"
            name="type"
            register={register}
            defaultValue={state.type}
            options={["Flat", "Shop", "Bunglow", "Garden Hall", "Villa"]}
          />

          <TextInput
            register={register}
            label={"Address"}
            name={"address"}
            placeholder={state.address}
          />

          <SelectInput
            label="Sell or Rent"
            name="sorr"
            register={register}
            defaultValue={state.sorr}
            options={["For Sell", "For Rent"]}
          />

          <NumberInput
            label="Size in Sq Feet"
            name="size"
            register={register}
            placeholder={state.size}
          />
          <NumberInput
            name="price"
            label="Rent Amount"
            register={register}
            placeholder={state.price}
          />

          <TextInput
            register={register}
            label={"Owner Name"}
            name={"owner"}
            placeholder={state.owner}
          />

          <NumberInput
            label="Number of Rooms"
            name="rooms"
            register={register}
            placeholder={state.rooms}
          />

          <SelectInput
            label="Furniture"
            name="furniture"
            register={register}
            defaultValue={state.furniture}
            options={["Not available", "Full Furnished", "Semi Furnished"]}
          />
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
export default AdvertisementForm;
