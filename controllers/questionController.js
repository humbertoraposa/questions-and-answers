const { Question } = require("../models/models")
const service = require("../services/QuestionService")

const list = (req,res) => {
    service.findAll()
    .then(result =>{    
        res.statusCode = 200
        res.end(result)
    }).catch( err => {
        res.statusCode = 400
        res.end(`A internal error occured: ${err}`)
    })
}

const insertOrUpdate = (req, res) => {
    let {question, answer}  = req.body
    if (answer) {
        service.update(question, answer)
        .then(result =>{    
            res.statusCode = 200
            res.end(result)
        }).catch( err => {
            res.statusCode = 400
            res.end(`Error while updating: ${err}`)
        })
    } else{
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

const findById = (req,res) => {
    const { id } = req.params
    service.findById(id)
    .then(result => {
        res.statusCode = 200
        res.end(result)
    }).catch( err => {
        res.statusCode = 400
        res.end(`A internal error occured: ${err}`)
    })
}

module.exports = {
    list,
    insertOrUpdate,
    findById
}