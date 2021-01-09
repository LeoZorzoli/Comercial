const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const reservationSchema = Schema({
    firstName: {
        type: String,
        minlength: 3
    },
    lastName: {
      type: String,
      minlength: 3
    },
    phoneNumber: {
        type: String,
        minlength: 6
    },
    email: {
        type: String,
        minlength: 6
    },
    date: {
        type: String,
    },
    hour: {
        type: String,
    },
    totalPeople: {
        type: String,
    }
})


reservationSchema.plugin(uniqueValidator)

reservationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id =returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Reservation', reservationSchema)