const { Sequelize, DataTypes} = require('sequelize')
const { Author, Topic } = require("../models/models")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite',
    define:{
        freezeTableName: true
    }
})

sequelize.sync({force:true});

Author.bulkCreate([
    {userName:"alano",displayName:"Alano Souza",email:"alanos@email.com",birthDate:"2000-01-29",gender:"m"},
    {userName:"bedois",displayName:"Beutrano Silva",email:"b2@somemail.co.uk",birthDate:"1992-04-10",gender:"n"},
    {userName:"ciclismo22",displayName:"Ciclano Aguiar",email:"bikelife@gmail.com.br",birthDate:"1998-03-21",gender:"m"},
    {userName:"deutrano",displayName:"Deutrano Bastos",email:"deutrano@othermail.com",birthDate:"1987-11-22",gender:"m"},
    {userName:"elie",displayName:"Eliana Martins",email:"elie88@yourmail.co.jp",birthDate:"1988-02-07",gender:"f"},
    {userName:"fuuulano",displayName:"Fulano Dital",email:"fuuu@fmail.com",birthDate:"1990-09-05",gender:"m"},
    {userName:"ggg",displayName:"Gerânio das Dores",email:"floresdores@mymail.com.br",birthDate:"",gender:"m"},
    {userName:"helena",displayName:"Helena Tavares",email:"hell.girl@nomail.com",birthDate:"1985-02-12",gender:"f"},
    {userName:"ilana",displayName:"Ilana Santos",email:"ilanawithi@hey.com",birthDate:"1991-12-02",gender:"f"}
]).then(result =>{
    console.log("Author Insert","Author insert success")
}).catch(err =>{
    console.log(err);
})
Topic.bulkCreate([
    {topicName:"angular"},
    {topicName:"angularjs"},
    {topicName:"react"},
    {topicName:"vue"},
    {topicName:"node"},
    {topicName:"php"},
    {topicName:"java"},
    {topicName:"c#"},
    {topicName:"c++"},
    {topicName:"rust"},
    {topicName:"haskell"},
    {topicName:"web assembly"},
    {topicName:"bash"},
    {topicName:"ruby"},
    {topicName:"rails"},
    {topicName:"grails"},
    {topicName:"backbone"},
    {topicName:"ux"},
    {topicName:"other"}
]).then(result =>{
    console.log("Topic Insert","Insert insert success")
}).catch(err =>{
    console.log(err);
})