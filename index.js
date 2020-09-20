const polka = require('polka');
const QuestionController = require('./controllers/questionController');

polka()
    .get ('/', QuestionController.list)
    .get ('/question', null)
    .post('question', null)
    .get ('/question/:id', null)
    .post('/question/:id', null)

    .listen(process.env.PORT, err=>{
        if(err) throw err;
        console.log('Running on port 3000');
    })

