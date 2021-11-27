const jwt = require('jsonwebtoken')
const notesRouter = require('express').Router()
const userExtractor = require('../middleware/userExtractor')

const Note = require('../models/Note')
const User = require('../models/User')

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({}).populate('user', { username: 1, name: 1 })
  response.status(200).json(notes)
})

notesRouter.get('/:id', (request, response, next) => {
  const { id } = request.params

  Note.findById(id)
    .then((note) => {
      if (!note) {
        return response.status(404).end()
      }
      return response.json(note)
    })
    .catch((error) => next(error))
})

notesRouter.delete('/:id', userExtractor, (request, response, next) => {
  const { id } = request.params
  Note.findByIdAndRemove(id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

notesRouter.post('/', userExtractor, async (request, response, next) => {
  const { content, important = false } = request.body

  if (!content) {
    response.status(400).json({
      error: 'content missing',
    })
    return
  }

  const { userId } = request

  const user = await User.findById(userId)

  const newNote = new Note({
    content,
    important,
    user: user._id,
    date: new Date(),
  })

  try {
    const savedNote = await newNote.save()
    response.status(201).json(savedNote)

    user.notes = user.notes.concat(savedNote._id)
    await user.save()
  } catch (error) {
    next(error)
  }
})

notesRouter.put('/:id', userExtractor, (request, response, next) => {
  const { id } = request.params
  const note = request.body
  if (!note?.content) {
    response.status(400).json({
      error: 'content missing',
    })

    return
  }

  const newNoteInfo = {
    content: note.content,
    important: note.important || false,
  }

  // with {new: true} we get the updated note
  Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    .then((note) => {
      response.status(200).json(note)
    })
    .catch((error) => next(error))
})

module.exports = notesRouter
