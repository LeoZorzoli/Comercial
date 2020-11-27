const User = require('../models/user')

const testUser = {
    name: 'example User',
    username: 'example',
    password: 'example',
}


const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}
  
module.exports = {
    usersInDb,
    testUser
}