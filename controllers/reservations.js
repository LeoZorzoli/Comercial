const reservationRouter = require('express').Router()
const Reservation = require('../models/Reservation')

reservationRouter.get('/', async(request,response) => {
    const reservations = await Reservation
        .find({})
    response.json(reservations)
})

reservationRouter.post('/', async (request, response) => {
    const body = request.body

    const reservation = new Reservation({
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber,
        email: body.email,
        date: body.date,
        hour: body.hour,
        totalPeople: body.totalPeople
    })
    
    const savedReservation = await reservation.save()
    response.status(201).json(savedReservation.toJSON())
})

module.exports = reservationRouter