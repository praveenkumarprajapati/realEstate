const mongoose = require('mongoose');

const advertisement = mongoose.Schema(
    {
        name: {
            type: String
        },
        type: {
            type: String
        },
        address: {
            type: String
        },
        sorr: {
            type: String
        },
        size: {
            type: Number
        },
        price: {
            type: Number
        },
        owner: {
            type: String
        },
        ownercontact: {
            type: String
        },
        furniture: {
            type: String
        }
    }, { collection: "advertisement" })

module.exports = mongoose.model("Adds", advertisement)