const express = require('express')
const router = express.Router() 

const scores = require('../controller/score.js')

router.get('/scores', scores.getAllScores)
router.get('/scores/:id', scores.getScore)
router.post('/scores', scores.createScore)

module.exports = router