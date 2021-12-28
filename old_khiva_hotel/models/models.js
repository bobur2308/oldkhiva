const {Schema,model} = require('mongoose')

const person = new Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  message:{
    type:String,
    required:true,
    min:10
  }
})

module.exports = model('Person',person)