const express = require('express')
const router = express.Router() 

const scores = require('../controller/score.js')

router.get('/scores', scores.getAllScores)
router.get('/scores/:id', scores.getScore)
router.post('/scores', scores.createScore)

//db routes
router.get('/dbscore', scores.getAllDbScores)
router.post('/dbscore', scores.createDbScore)

module.exports = router