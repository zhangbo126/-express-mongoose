const mongoose = require('./connect')
let schema = mongoose.Schema({
    "name": String,
    "status": Number,
    "icon": String,
    "component": String,
    "url": String,
    "redirectUrl": String,
    "sort": Number,
    "key": String,
    "parentId": String,
    "children": Array

})



//userInfoList 集合名称
let menuInfo = mongoose.model('menuInfo', schema, 'menuList')



module.exports = menuInfo