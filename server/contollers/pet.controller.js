const Pet = require('../models/pet.model')

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            console.log("Trying to find all the pets")
            res.json({results: allPets})
        })
        .catch(err => res.json(err))
}

module.exports.createOnePet = (req, res) => {
    Pet.create(req.body)
    .then(newlyCreatedPet=> res.json({results: newlyCreatedPet}))
    .catch(err => res.json(err))
}

module.exports.findAPet = (req, res) => {
    Pet.findOne({_id: req.params.petid})
        .then(onePet => res.json({results: onePet}))
        .catch(err => res.json(err))
}

module.exports.updateAPet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.petid},
        req.body ,
        {new:true, runValidators:true})
        .then(updatedPet => res.json({results: updatedPet}))
        .catch(err => res.json(err))    
}

module.exports.deleteAPet = (req, res) => {
    Pet.deleteOne({_id: req.params.petid})
        .then(deletedResult => res.json({results: deletedResult}))
        .catch(err => res.json(err))
}