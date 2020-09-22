const {Author} = require("../models/models")

// TODO: this class is accessing the model directly 

const listAll = (req,res) => {

    Author.findAll()
    .then(list => {
        res.statusCode = 200
        res.end(list)
    }).catch(err =>{
        res.statusCode = 400
        res.end("Error retrieving data: " + err)
    })
}

const save = (author) => {
    return Author.create(author)
}

module.exports = {
    listAll,
    save
}