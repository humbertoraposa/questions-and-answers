const service = require("../services/QuestionService")
const answerService = require("../services/AnswerService")

// renders
const display = (req,res) => {
    service.findAll()
    .then(result => {
        res.statusCode = 200
        res.render("pages/index",{questions: result})
    }).catch(err =>{
        res.statusCode = 500
        res.end("A internal error occured. Contact the system administrator.")
        console.log(err)
    })
}

const create = async (req,res) =>{
    try{
        const topics = await service.listTopics()
        console.log("found topics:"+ topics)
        const authors = await service.listAuthors()
        res.render('pages/question',{new:true, topics, authors})
    }catch(err){
        res.end("ocorreu um erro")
        console.log(err)
    }
}

const answer = (req,res) =>{
    const {id} = req.params
    service.findByPk(id)
    .then((result) => {
        res.render('pages/question', {
            new:false,
            question: result
        })
    }).catch((err) => {
        console.log(err)
        res.render('404')
    })
}

const list = (req,res) => {
    service.findAll()
    .then(result =>{
        res.statusCode = 200
        res.end(JSON.stringify(result))
    }).catch( err => {
        res.statusCode = 400
        console.log(err)
        res.end(`A internal error occured: ${err}`)
    })
}

const save = async(req, res) => {
    const { id } = req.params;
    if (id){
        //save answer
        let answer = answerService.validateAnswer(req)
        answerService.save(answer)
        .then(()=>{
            res.render('pages/index')
        }).catch(err => {
            res.statusCode = 400
            res.end(`Error while saving answer: ${err}`)
        })
    }else{
        console.log(req)
        let question = service.validateQuestion(req)
        service.save(question)
        .then(result =>{    
            res.statusCode = 200
            res.end(result)
        }).catch( err => {
            res.statusCode = 400
            res.end(`Error while saving: ${err}`)
        })
    }
}

const getById = (req,res) => {
    const { id } = req.params
    service.findByPk(id)
    .then(result => {
        res.statusCode = 200
        res.end(result)
    }).catch( err => {
        res.statusCode = 400
        res.end(`A internal error occured: ${err}`)
    })
}


module.exports = {
    display,
    create,
    save,
    list,
    getById,
    answer
}