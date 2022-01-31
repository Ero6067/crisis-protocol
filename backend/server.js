import express from 'express'
import dotenv from 'dotenv'
import characters from './data/characters.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/characters', (req, res) => {
  res.json(characters)
})

app.get('/api/characters/:id', (req, res) => {
  const character = characters.find((c) => c.index == req.params.id)
  res.json(character)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
