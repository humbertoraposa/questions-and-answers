const { Answer, Author } = require('../models/models')

const validateAnswer = (obj) =>{
    return {
        text: obj.text || obj.answerText,
        authorId: obj.authorId

    }
    
}
const save = (answer) => {
    return Answer.create(answer)
}

module.exports = {
    validateAnswer,
    save
}