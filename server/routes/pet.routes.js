const PetController = require("../contollers/pet.controller")

module.exports = app => {
    app.get("/api/pets/all", PetController.findAllPets)
    app.post("/api/pets/create", PetController.createOnePet)
    app.get("/api/pets/:petid", PetController.findAPet)
    app.put("/api/pets/update/:petid", PetController.updateAPet)
    app.delete("/api/pets/delete/:petid", PetController.deleteAPet)
}