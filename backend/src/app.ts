import express, { json } from 'express'
import logger from './middlewares/error/logger';
import responder from './middlewares/error/responder';
import notFound from './middlewares/not-found';
import meetingShowerRouter from './routers/meeting-shower'
import meetingAddRouter from './routers/meeting-add'
import meetingDeleteRouter from './routers/meeting-delete'
import meetingExtractRouter from './routers/meeting-extract'
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

app.use('/meeting-shower', meetingShowerRouter)
app.use('/meeting-add', meetingAddRouter)
app.use('/meeting-delete', meetingDeleteRouter)
app.use('/meeting-extract', meetingExtractRouter)

app.use(notFound)

app.use(logger)
app.use(responder)

sequelize.sync({ force: process.argv[2] === 'sync' })

console.log(process.argv)

app.listen(port, () => console.log(`${appName} started on port ${port}`))
