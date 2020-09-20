const { Sequelize, DataTypes, INTEGER } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db/database.sqlite',
    define:{
        freezeTableName: true
    }
})

const Author = sequelize.define('Author',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate:{
        type: DataTypes.DATEONLY,
        allowNull:true
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: true
    },
})

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    text: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    authorId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Author,
            key:'id'
        }
    },
    answerId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Answer,
            key:'id'
        }
    }
},{
    timestamps:true,
    createdAt: 'PublishedAt',
    updatedAt:'LastUpdateAt'
})

const Answer = sequelize.define('Answer', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    text: {
        type: DataTypes.BLOB,
        allowNull:false
    },
    aproved: {
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    authorId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Author,
            key: 'id'
        }
    }
},{
    timestamps:true,
    createdAt: 'PublishedAt',
    updatedAt:'LastUpdateAt'
})

const Topic = sequelize.define('Topic', {
    topicName:{
        type:DataTypes.STRING,
        key: true
    }
})

Question.belongsToMany(Topic,{through:'QuestionTopics'});
Topic.belongsToMany(Question, {through: 'QuestionTopics'})

sequelize.sync({alter: true})

module.exports = {
    Author,
    Question,
    Answer,
    Topic
}
