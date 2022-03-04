const fs = require('fs')
const path = require('path')

module.exports.getFileJsonData = (filePath) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        rejects(error)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports.getFilePath = (url) => {
  return path.join(__dirname, '../api', url + '.json')
}

module.exports.insetJsonData = (filePath, data) => {
  return new Promise((resolve, rejects) => {
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        rejects(error)
      } else {
        resolve()
      }
    })
  })
}