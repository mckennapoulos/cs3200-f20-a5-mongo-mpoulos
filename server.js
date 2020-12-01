const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard',
                 {useNewUrlParser: true});

require("./http/quizzes-http-api")(app)
require("./http/questions-http-api")(app)

app.listen(3000)