import axios from 'axios'


//Getting all Advertisements
export const getAdvertisement = () => fetch("http://localhost:8000/").then((fetched) => {
    if (fetched.ok) {
        return fetched.json()
    }
}).catch((err) => {
    console.log(err)
})

//Creating new Advertisement
export const createAdvertisement = advertisement => {
    axios.post("http://localhost:8000/",
        JSON.stringify(advertisement), {
        "headers": {
            "content-type": "application/json"
        }
    }).then((res) => {
        return "Sucess"
    }).then((msg) => {

    }).catch((err) => {
        alert("Erro While Connecting to server");
    })
}

//Getting Advertisement of specific id
export const getAdvertisementById = async id => {
    try {
        return await axios.get(`http://localhost:8000/${id}`).then((res) => {
            return res.data
        })
    } catch (err) {
        return ({ error: "true" })
    }
}

//Editing an Advertisement 
export const editAdvertisement = () => {

}
