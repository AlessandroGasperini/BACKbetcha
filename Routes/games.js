const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()
const dbo = require("../db/connect")

const ObjectId = require("mongodb").ObjectId;

router.route('/getAllGames').get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect.collection("allGames")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err
            res.json(result)
        })
})

module.exports = router