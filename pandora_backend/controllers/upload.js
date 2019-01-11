const
    fs = require('fs'),
    path = require('path')

const { insertFile } = require('../database/sequelize')

const fn_upload = async (ctx, next) => {
    // 上传单个文件
    const fileUpload = ctx.request.files.fileUpload

    //创建可读流
    const reader = fs.createReadStream(fileUpload.path)
    let filePath = path.resolve(__dirname, '../public/upload/') + `/${fileUpload.name}`
    //创建可写流
    const upStream = fs.createWriteStream(filePath)
    reader.pipe(upStream)

    let
        nowDate = new Date(),
        fileUploadTime = nowDate.getFullYear() +
            '-' + nowDate.getMonth() +
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
        upload_time: new Date()
    }
    console.log(fileItem)

    insertFile(fileItem).then(result => {
        ctx.response.status = 200
        ctx.response.body = '上传成功! ' + result
        console.log('created: ' + JSON.stringify(result))

    }).catch(err => {
        ctx.response.status = 503
        ctx.response.body = '上传失败! ' + err
        console.log('failed: ' + err)
    })
}

module.exports = {
    'POST /api/upload': fn_upload
}