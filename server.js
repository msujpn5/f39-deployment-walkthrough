const express = require('express')

const app = express()

app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/styles', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css')
})

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/public/main.js')
})

app.listen(4000, () => {
    console.log('up on 4000')
})

