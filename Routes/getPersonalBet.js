const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()
const bcryptFunctions = require('../bcrypt');
const dbo = require("../db/connect")

const ObjectId = require("mongodb").ObjectId;

router.route("/personalBets").post(async (request, response) => {
    const credentials = request.body
    let db_connect = dbo.getDb()
    db_connect.collection('personalBets').findOne({
        username: credentials.username
    }, async function (err, isMatch) {
        response.json(isMatch.allDoneBets)
    })
})


module.exports = router