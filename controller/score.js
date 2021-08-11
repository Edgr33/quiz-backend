var scoreList = [
  {name:'Alberto Plaza', score:5},
  {name:'Jorge Baradit', score:9},
  {name:'Carol Dance', score:10},
  {name:'Pedro Fernandez', score:3},
  {name:'Federico Sánchez', score:8}
]

const dbScore = require('../models/score')

const controller = {
  getAllScores: function (request, response) {
    return response.status(200).send(scoreList)
  },

  getScore: function (request, response) {
    const id = request.params.id
    const scoreId = scoreList.find(score => score.id === id)

    return response.status(200).send(scoreId)
  },

  createScore: function (request, response) {
    const params = request.body

    const newScore = {
      id: (scoreList.length + 1).toString(),
      name: params.name,
      score: params.score
    }

    scoreList.push(newScore)

    return response.status(200).send(newScore)
  },

  getAllDbScores: async function (request, response) {
    const scores = await dbScore.find()

    return response.status(200).send(scores)
  },

  createDbScore: async function (request, response) {
    const { name, score } = request.body

    const newScore = new dbScore({name, score})
    await newScore.save()

    return response.status(200).send(newScore)
  }

}

module.exports = controller