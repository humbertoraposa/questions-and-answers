const polka = require('polka');
const QuestionController = require('./controllers/questionController');
const port = process.env.PORT || 3000;
polka()
    .get ('/', QuestionController.list)
    .post('/question', QuestionController.insertOrUpdate)
    .get ('/question/:id', QuestionController.findById)
    .post('/question/:id', QuestionController.insertOrUpdate)

    .listen(port, err=>{
        if(err) throw err;
        console.log(`Running on port ${port}`);
    })

