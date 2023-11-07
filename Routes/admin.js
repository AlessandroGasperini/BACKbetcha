const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router()
const bcryptFunctions = require('../bcrypt');
const dbo = require("../db/connect")

const ObjectId = require("mongodb").ObjectId;


// Skapa nytt konto
router.route("/checkIfMadeTeam").post(async (req, res) => {
    const credentials = req.body
    let resObj = {
        hasTeam: false,
        myBet: []
    }
    let db_connect = dbo.getDb()

    db_connect.collection('personalBets').findOne({
        username: credentials.userName
    }, async function (err, isMatch) {
        if (isMatch) {
            resObj.hasTeam = true
            resObj.myBet = isMatch
            res.json(resObj)
        } else {
            res.json(resObj)
        }
    })

})



module.exports = router