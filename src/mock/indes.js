const Mock = require('mockjs')

const infoData = Mock.mock({
  "list|1-10": [{
    "name": "@cname",
    "abstract": "@word(2,4)",
    "tags": "@word(2,4)",
    "actin": "@word(2,4)",
    "createTime": "@datetime",
    "updateTime": "@datetime"
  }]
})

console.log(infoData)