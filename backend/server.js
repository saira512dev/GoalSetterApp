const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(PORT, console.log(`connected on port ${PORT}`))