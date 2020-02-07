const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/echo', (req, res) => { res.json(req.body) })
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/date', (req, res) => res.send('2020.02.05'))

app.post('/login', (req, res) => {
        res.json({ sender: 'server', message: ': a message' })
        console.log(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))