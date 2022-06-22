const mongoose = require('mongoose')

const conn = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://1234:1234@fiaptecnico.kreph.mongodb.net/todo_list')
}
module.exports = conn
