const express = require("express");
const burger = require("../models/burger");
let router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured + 1
    }, condition, function(result) {

        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// I know this IS a delete route but it works all the same as a PUT route.. So I did it.. It doesnt delete at all but actually updates the burger info to move the burger from devoured to not devoured.
router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    
    burger.update({
        devoured: req.body.devoured - 1
    }, condition, function(result) {

        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name"
    ], [
      req.body.name
    ], function(result) {

      res.json({ id: result.insertId });
    });
  });


module.exports = router;