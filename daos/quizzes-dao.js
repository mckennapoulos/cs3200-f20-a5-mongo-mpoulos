const quizzesModel = require('../models/quizzes/quizzes-models')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (qId) => quizzesModel.find({quizId: qId})
module.exports = { findAllQuizzes, findQuizById }