var scoreList = [
  {id: '1', name:'Alberto Plaza', score:8},
  {id: '2', name:'Jorge Baradit', score:9},
  {id: '3', name:'Carol Dance', score:10},
  {id: '4', name:'Pedro Fernandez', score:3},
]

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
  }

}

module.exports = controller