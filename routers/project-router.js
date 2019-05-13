const router = require("express").Router();

const db = require("../helpers/projects-model.js");


router.get('/', (req, res) => {
    db.find()
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "The projects could not be retrieved" })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
    .then(db => {
        res.status(200).json(db);
    })
    .catch(err => {
        res.status(500).json({ err: "The projects could not be retrieved" })
    })
})

router.post('/', (req, res) => {
    const projInfo = req.body;

    !projInfo.name || !projInfo.description
    ?
        res.status(400).json({ errorMessage: "Please provide both a name and description for the project." })
    :
        db.add(projInfo)
        .then(proj => {
            res.status(201).json(proj);
        })
    .catch( err => {
        res.status(500)({ error: "There was an error while saving this project to the database." })
    })
})

router.get('/:id/actions', (req, res) => {
    const id = req.params.id;
    db.getProjectActions(id)
    .then(db => {
        if (db === 0) {
        res.status(404).json({ message: "Unable to find."});
        } else {
            res.status(200).json(db)
        }
    })
    .catch(err => {
        res.status(500).json({ error: "The project's actions could not be retrieved."})
    })
});

module.exports = router;