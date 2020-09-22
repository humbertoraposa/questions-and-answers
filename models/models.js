const { Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite',
    define:{
        freezeTableName: true
    }
})

const Author = sequelize.define('Author',{
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
},{
    timestamps:false
})

const Answer = sequelize.define('Answer', {
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
            model: Author
        }
    }
},{
    timestamps:true,
    createdAt: 'PublishedAt',
    updatedAt:'LastUpdateAt'
})

const Question = sequelize.define('Question', {
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
            model: Author
        }
    },
    answerId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Answer
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
},{
    timestamps:false,
})

Question.belongsToMany(Topic,{through:'QuestionTopics'});
Topic.belongsToMany(Question, {through: 'QuestionTopics'})

sequelize.sync()

module.exports = {
    Author,
    Question,
    Answer,
    Topic
}
