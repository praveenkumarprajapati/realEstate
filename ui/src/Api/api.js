import axios from "axios";
import { API_URL } from "../constants";

//Getting all Advertisements
export const getAdvertisement = () => {
  return fetch(API_URL)
    .then((fetched) => {
      if (fetched.ok) {
        return fetched.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//Creating new Advertisement
export const createAdvertisement = (advertisement) => {
  axios
    .post(API_URL, JSON.stringify(advertisement), {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      alert("Error While Connecting to server");
    });
};

//Getting Advertisement of specific id
export const getAdvertisementById = async (id) => {
  try {
    return await axios.get(API_URL + "/" + id).then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err);
    return { error: "true" };
  }
};

//Editing an Advertisement
export const editAdvertisement = () => {};
