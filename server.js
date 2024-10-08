const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => res.json({ message: 'Server is up silly goose' }))

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
