const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Adds = require("./models/Adds")


mongoose.connect("mongodb://localhost:27017/realestate", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Sucess")
}).catch((err) => {
    console.log("Error")
});

mongoose.connection.once('open', () => {
    console.log("MongoDB Connected Succsses")
})
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    Adds.find((err, adds) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(adds)
        }
    });
});

app.post("/newAdd", (req, res) => {
    const adds = new Adds(req.body);
    console.log("Request Body" + adds)
    adds.save().then((adds) => {
        res.json(adds)
    }).catch((err) => {
        res.status(500).send(err.message)
    });
});

app.get("/add/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    Adds.findById({ _id: id }, (err, adds) => {
        if (err) {
            res.send("Error")
        }
        else {

            res.json(adds)
        }
    });
});

const port = 8000;
app.listen(port, () => {
    console.log("Server Running")
})