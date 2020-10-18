const express = require("express");
const burger = require("../models/burger");
let router = express.Router();

// create router here
router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;