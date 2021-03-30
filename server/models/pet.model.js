const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name needs to be filled out!"],
        minLength: [2, "Pet name must be at least 2 characters"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Pet type needs to be filled out!"],
        minLength: [2, "Pet type must be at least 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Need a description of the Pet!"],
        minLength: [5, "Pet description must be at least 5 characters"]
    }
})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;