const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('./Models/databaseConnection')
const Advertisements = require("./Models/Advertisements")

const app = express()

app.use(cors())
app.use(express.json())


// @route GET /getAllAdvetisemets
// @desc get all advertisemets

app.get("/", (req, res) => {
    Advertisements.find((err, adds) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json(adds)
        }
    });
});

// @route GET /add/:id
// @desc get specific advertisement by id
app.get("/:id", (req, res) => {
    Advertisements.findById(req.params.id, (err, adds) => {
        if (err) {
            res.status(400)
            res.send("Connection Error")
        }
        else {
            res.json(adds)
        }
    });
});

// @route POST /create
// @desc create new advertisement
app.post("/", (req, res) => {
    console.log(req.body);
    const adds = new Advertisements(req.body);
    adds.save().then((adds) => {
        res.json(adds)
    }).catch((err) => {
        res.status(500).send(err.message)
    });
});

// for (let i = 0; i < 10; i++) {
//     const adds = new Advertisements({
//         name: 'Olompic Garder',
//         type: 'Bunglow',
//         address: 'Miraroad (East)',
//         sorr: 'For Sell',
//         size: '456',
//         price: '345664',
//         owner: 'Praveen Prajapati',
//         ownercontact: '45566567',
//         furniture: 'No'
//     });
//     adds.save().then((adds) => {
//         res.json(adds)
//     }).catch((err) => {
//         res.status(500).send(err.message)
//     });
// }


// @route PUT /updateById/:id
// @desc create new advertisement
app.put("/:id", async (req, res) => {
    try {
        await Advertisements.findByIdAndUpdate(req.params.id, req.body).then((addvertisement) => {
            res.status(200).send(addvertisement)
        }).catch((err) => {
            res.status(404).send(err)
        })
    }
    catch (err) {
        console.log(err)
    }
});

// @route POST /create
// @desc create new advertisement
app.delete("/:id", (req, res) => {
    try {
        Advertisements.findByIdAndRemove(req.params.id).then(deleted => {
            res.send({ message: "Advertisement Deleted Sucessfully" })
        }).catch(err => {
            res.status(400).send({ error: err })
        })
    }
    catch (err) {
        res.status(400).send({ error: err })
    }
});

const port = 8000;
app.listen(port, () => {
    console.log("Server Running")
})