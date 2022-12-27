import express, {Application, Request, Response} from 'express'
import morgan from 'morgan'
import resizeRouter from './routes/resizeRouter'

//Instantiating express app
const app: Application = express()

const midWar = morgan('tiny')

app.use(midWar)

app.use('/resize', resizeRouter)

app.get('/test', (req: Request, res: Response) => {
	res.send('Hello world!')
})

export default app
