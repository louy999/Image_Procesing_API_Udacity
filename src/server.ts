import app from './app'
import dotenv from 'dotenv'
import {data} from './utils/data'
dotenv.config()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server starting ${PORT}...`))
