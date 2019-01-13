const
    Sequelize = require('sequelize'),
    dbConfig = require('./dbConfig')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    define: {
        underscored: true,
        charset: 'utf8',
        dialectOptions: {
        collate: 'utf8_general_ci'
        },
        timestamps:false
    }
})

const Files = sequelize.define('files', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    type: Sequelize.STRING(10),
    path: Sequelize.STRING(255),
    uploadTime: { type: Sequelize.STRING(12), field: 'upload_time' }
}, {
    timestamps:false
})

const insertFile = async (file) => {
    return Files.create(file)
}

const getAllFiles = async () => {
    return Files.findAll()
}

const deleteFileWithId = async (fileId) => {
    let fileToDelete = {}
    try {
        fileToDelete = await Files.findAll({
            where: {
                id: fileId
            }
        })
        console.log(fileToDelete[0].destroy)
        return fileToDelete[0].destroy()
    } catch (e) {
        throw(e)
    }
}

module.exports = {
    insertFile,
    getAllFiles,
    deleteFileWithId
}