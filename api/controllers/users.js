const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()

const User = require('../models/User')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('notes', { user: 0 })
  response.status(200).json(users)
})

// TODO: add more validations
usersRouter.post('/', async (request, response) => {
  const { body } = request
  const { password, username, name } = body

  const passwordHash = await bcrypt.hash(password, 10)

  const user = new User({
    passwordHash,
    username,
    name,
  })

  try {
    const savedUser = await user.save()
    response.status(201).json(savedUser)
  } catch (error) {
    response.status(400).send({ error: error.errors.username.message })
  }
})

usersRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const user = await User.findById(id).populate('notes', {
      user: 0,
      important: 0,
    })
    response.status(200).json(user)
  } catch (error) {
    response.status(400).send({ error: 'Missing or invalid id ' })
  }
})

module.exports = usersRouter
