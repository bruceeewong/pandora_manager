const
    Sequelize = require('sequelize'),
    dbConfig = require('./dbConfig')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

const Files = sequelize.define('files', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    type: Sequelize.STRING(10),
    author: Sequelize.STRING(50),
    path: Sequelize.STRING(255),
    upload_time: Sequelize.DATE
}, {
    timestamps:false
})

const insertFile = async (file) => {
    return Files.create(file)
}

module.exports = {
    insertFile
}