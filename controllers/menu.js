const menuRouter = require('express').Router()
const Menu = require('../models/Menu')

menuRouter.get('/', async (request, response) => {
    const menu = await Menu
        .find({})
    response.json(menu)
})

menuRouter.post('/', async (request, response) => {
    const body = request.body

    const menu = new Menu({
        name: body.name,
        types: body.types,
    })
    
    const savedMenu = await menu.save()
    response.status(201).json(savedMenu.toJSON())
})

menuRouter.put('/:id', async (request, response) => {
    const menu = request.body

    const updatedMenu = await Menu.findByIdAndUpdate(request.params.id, menu, { new: true })
    response.json(updatedMenu.toJSON())
})

module.exports = menuRouter