const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const menuSchema = Schema({
    name: {type: String},
    types: [{
      name: String,
      items: [{
        name: String,
        types: [{
          name: String,
          price: String
        }],
        description: String,
        category: String,
        price: String,
        additions: [{
          name: String,
          price: String
        }]
      }]
    }]
})

menuSchema.plugin(uniqueValidator)

menuSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Menu', menuSchema)