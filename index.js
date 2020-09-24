require('dotenv/config')
const ejs = require("polka-ejs")
const bodyParse = require("body-parser")

const polka = require('polka');
const QuestionController = require('./controllers/questionController');
const { answer } = require('./controllers/questionController');
const port = process.env.PORT || 3000;

polka()
.use(ejs())

.use(bodyParse.urlencoded({
    extended:true
}))
.get ('/', QuestionController.display) // list questions
.get ('/question', QuestionController.create ) // open form
.post('/question', (req,res) => QuestionController.save(req,res)) // validate and save question
.get ('/question/:id', QuestionController.answer) // open question for answering
.post('/question/:id', QuestionController.save) // validate and save answer
.get ('/api/question', QuestionController.list) // restAPI list questions
.get ('/api/question/:id', QuestionController.getById) // restAPI return question, if exists 
.listen(port, err=>{
    if(err) throw err;
    console.log(`Running on port ${port}`)

})

