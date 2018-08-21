import express from 'express'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config.json'
import mongoose from 'mongoose'
import routes from './routes'

// Setting up MongoDB & mongoose
mongoose.connect(config.mongooseAddress)
mongoose.Promise = global.Promise

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Setting up Express.js
let app = express()

app.use(morgan('dev'))

app.use(cors({
  exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json({
  limit: config.bodyLimit
}))

// Static asset serving
app.use('/assets', express.static(path.join(__dirname, '../assets')))

routes(app)

app.listen(process.env.PORT || config.port, () => {
  console.log('Server is active and listening...')
})
