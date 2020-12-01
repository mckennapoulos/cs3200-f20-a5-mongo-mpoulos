const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
                                            title: String,
                                            options: [String],
                                            quizId: String
                                        }, {collection: 'questions'})
module.exports = questionsSchema