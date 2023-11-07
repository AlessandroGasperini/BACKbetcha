const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()
const bcryptFunctions = require('../bcrypt');
const dbo = require("../db/connect")

const ObjectId = require("mongodb").ObjectId;


router.route('/getBetToCreate').get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect.collection("allBets")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err
            res.json(result)
        })
})

router.route('/getAllTeams').get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect.collection("allTeams")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err
            res.json(result)
        })
})


router.route("/sendInDoneBet").post(async (request, response) => {
    const credentials = request.body

    let db_connect = dbo.getDb()
    db_connect.collection("personalBets")
        .insertOne(credentials, function (err, result) {
            response.json(true)
        })
})


module.exports = router