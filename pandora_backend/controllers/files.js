const
    fs = require('fs'),
    path = require('path')

const db = require('../database/sequelize')

const fn_upload = async (ctx, next) => {
    // 上传单个文件
    const fileUpload = ctx.request.files.fileUpload

    // 暂时不存文件实体
    //创建可读流
    const reader = fs.createReadStream(fileUpload.path)
    let filePath = path.resolve(__dirname, '../public/upload/') + `/${fileUpload.name}`
    //创建可写流
    const upStream = fs.createWriteStream(filePath)
    reader.pipe(upStream)

    let
        nowDate = new Date(),
        fileUploadTime = nowDate.getFullYear() +
            '-' + (nowDate.getMonth() + 1) +
            '-' + nowDate.getDate()

    let i = (fileUpload.name).lastIndexOf('.')
    let
        fileName = (fileUpload.name).substring(0, i),
        fileType = (fileUpload.name).substring(i + 1)

    const fileItem = {
        id: fileType + Date.now(),
        name: fileName,
        type: fileType,
        path: filePath,
        uploadTime: fileUploadTime
    }
    // console.log(fileItem)

    let result = await db.insertFile(fileItem)

    console.log('Insert: ' + result)

    ctx.response.body = JSON.stringify(result)
}

const fn_getAllFiles = async (ctx, next) => {
    let result = await db.getAllFiles()

    console.log('get all files: ' + result)

    ctx.response.body = JSON.stringify(result)
}

const fn_deleteFile = async (ctx, next) => {
    console.log(ctx.request.body)
    let fileId = ctx.request.body
    if (!fileId) {
        return
    }
    let result = ''
    try {
        result = await db.deleteFileWithId(fileId)
        ctx.response.body = 'delete file success: ' + JSON.stringify(result)
    } catch(e) {
        result = 'delete file fail: ' + e
        ctx.response.body = result
    }
}

module.exports = {
    'POST /api/uploadfile': fn_upload,
    'GET /api/getallfiles': fn_getAllFiles,
    'POST /api/deletefile': fn_deleteFile
}