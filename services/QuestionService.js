const {Question, Topic, Author} = require("../models/models")

const validateQuestion = (obj) =>{
    // TODO: Sanitize and validate
    return {
        title : obj.questionTitle || obj.title,
        text : obj.questionText || obj.text,
        authorId : obj.questionAuthor || obj.authorId
    }
}

const findByPk = (id) =>{
    return Question.findByPk(id) 
}

const findAll = () => {
    return Question.findAll()
}

const save = async(question) => {
    console.log(JSON.stringify(question))
    return Question.create(question)
}

const update = (question, answer = null) => {
    let q = Question.build(question)
    if(answer){
        q.createAnswer(answer)
    }
    q.save()
}

const listTopics = () => {
    return Topic.findAll()
}

const listAuthors = () => Author.findAll()

module.exports = {
    findByPk,
    findAll,
    save,
    update,
    listAuthors,
    listTopics,
    validateQuestion
}