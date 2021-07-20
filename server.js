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

app.get("/getAllAdvertisemets", (req, res) => {
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
app.get("/add/:id", (req, res) => {
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
app.post("/create", (req, res) => {
    const adds = new Advertisements(req.body);
    adds.save().then((adds) => {
        res.json(adds)
    }).catch((err) => {
        res.status(500).send(err.message)
    });
});

// @route POST /create
// @desc create new advertisement
app.delete("/:id", (req, res) => {
    try {
        Advertisements.findByIdAndRemove(req.params.id).then(res => {
            res.send({ message: "Advertisement Deleted Sucessfully" })
            console.log("Delete Called Succ")
        }).catch(err => {
            res.status(400).send({ error: err })
            console.log("Delete Called Err")
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