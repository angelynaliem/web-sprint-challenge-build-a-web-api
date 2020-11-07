const express = require("express")

const projectRouter = express.Router()

const project = require("../data/helpers/projectModel.js")

//GET 
projectRouter.get("/:id", (req,res) => {
    project.get(req.params.id)
    .then(resource => {
        if(resource) {
            res.status(200).json(resource)
        } else {
            res.status(404).json({ message: "Resource not found" })
        }
    })
    .catch(error => {
        console.log("Error getting resource with specified id ", error)
        res.status(500).json({ errorMessage: "Error processing GET project with specified id" })
    }) 
})

//POST


//PUT

//DELETE



module.exports = projectRouter