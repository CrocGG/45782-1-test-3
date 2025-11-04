import express, { json } from 'express'
import logger from './middlewares/error/logger';
import responder from './middlewares/error/responder';
import notFound from './middlewares/not-found';
import movieShowerRouter from './routers/movie-shower'
import movieAddRouter from './routers/movie-add'
import movieDeleteRouter from './routers/movie-delete'
import movieExtractRouter from './routers/movie-extract'
import config from 'config'
import sequelize from './db/sequelize';
import cors from 'cors'

const app = express()

const port = config.get<number>('app.port')
const appName = config.get<string>('app.name')
const secret = config.get<string>('app.secret')

console.log(`app secret is ${secret}`)

app.use(cors())

app.use(json())

app.use('/movie-shower', movieShowerRouter)
app.use('/movie-add', movieAddRouter)
app.use('/movie-delete', movieDeleteRouter)
app.use('/movie-extract', movieExtractRouter)

app.use(notFound)

app.use(logger)
app.use(responder)

sequelize.sync({ force: process.argv[2] === 'sync' })

console.log(process.argv)

app.listen(port, () => console.log(`${appName} started on port ${port}`))
