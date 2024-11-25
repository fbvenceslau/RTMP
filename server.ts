import express from 'express'
import { router } from './routes'


const app = express()

app.use(express.static('public'))

app.use(router)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server started successfuly at port ${PORT}`)
})