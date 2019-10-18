const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbObj = { burgers: data }
        console.log(hbObj);
        res.render("index", hbObj)
    })
})

router.post("api/burger", (req, res) => {
    burger.all(req.body.col1, req.body.col2, req.body.name, req.body.devour, (data) => {
        const hbObj = { status: data }
        console.log(hbObj);
        res.render("index", hbObj)
    })
})

router.put("api/burger", (req, res) => {
    burger.all(req.body.col1, req.body.col2, req.body.name, req.body.devour, (data) => {
        const hbObj = { status: data }
        console.log(hbObj);
        res.render("index", hbObj)
    })
})

module.exports = router;