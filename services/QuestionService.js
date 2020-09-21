const {Question,Answer} = require("../models/models")

const findById = (id) =>{
    return Question.findByPk(id)
}

const findAll = () => {
    return Question.findAll()
}

const save = async(question) => {
    return Question.create(question)
}

const update = (question, answer = null) => {
    let q = Question.build(question)
    if(answer){
        q.createAnswer(answer)
    }
    q.save()
}

module.exports = {
    findById,
    findAll,
    save,
    update
}