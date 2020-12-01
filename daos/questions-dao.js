const questionsModel = require('../models/questions/questions-models')
const findAllQuestions = () => questionsModel.find()
const findQuestionsForQuiz = (quizId) => questionsModel.findById(quizId)
const findQuestionById = (questionId) => questionsModel.findById(questionId)
module.exports = { findAllQuestions, findQuestionsForQuiz, findQuestionById }