const express = require("express")

const actionRouter = express.Router()

const action = require("../data/helpers/actionModel.js")

//GET
actionRouter.get("/:id", (req,res) => {
    action.get(req.params.id)
    .then(act=> {
        if(act) {
            res.status(200).json(act)
        } else {
            res.status(404).json({ message: "Specified action not found" })
        }
    })
    .catch(error => {
        console.log("Error getting action with specified id ", error)
        res.status(500).json({ errorMessage: "Error processing GET action with specified id" })
    }) 
})

//POST
actionRouter.post("/", (req, res) => {
    action.insert(req.body)
    .then(act => {
              res.status(201).json(act)
            })
            .catch(error => {
              console.log("Error adding action ", error)
              res.status(500).json({ errorMessage: "Error processing POST a new action" })
            })        
})


//PUT


//DELETE


module.exports = actionRouter