import express from 'express'
import AppController from './app-controller'
import Sum from './test/sum'

console.log(Sum(1,3))
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const html = await new AppController(req, res).index()
  res.send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))