const router = require("express").Router();

const db = require("../helpers/actions-model.js");

router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "The actions could not be retrieved" })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "The actions could not be retrieved" })
    })
})

router.post('/', (req, res) => {
    const actionInfo = req.body;

    !actionInfo.description
    ?
        res.status(400).json({ errorMessage: "Please provide a description for this action." })
    :
        db.add(actionInfo)
        .then(action => {
            res.status(201).json(action);
        })
    .catch( err => {
        res.status(500)({ error: "There was an error while saving this action to the database." })
    })
})

module.exports = router;