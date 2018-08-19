import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config.json'

let app = express()

app.use(morgan('dev'))

app.use(cors({
  exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json({
  limit: config.bodyLimit
}))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || config.port, () => {
  console.log('Server is active and listening...')
})
