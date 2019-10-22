const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbObj = { burgers: data }
        res.render("index", hbObj)
    })
})

router.post("/api/burger", (req, res) => {
    burger.insert(req.body.burger_name, (data) => {
        res.status(204).end()
    })
})

router.put("/api/burger", (req, res) => {
    burger.devour(req.body.id, (data) => {
        res.status(204).end()
    })
})

module.exports = router;