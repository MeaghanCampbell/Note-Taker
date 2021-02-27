const express = require('express')
const fs = require('fs')

// instantiate the server
const app = express()

// route that front end can request data from
const notes = require('./Develop/db/db.json')

// reads the db.json file
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

// returns index.html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// // returns notes.html
// app.get('/notes', (req, res) => {
//     return res.sendFile(path.join(__dirname, 'notes.html'))
// })

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file and return the new note to the client
// need to find a way to give each note a unique id when it's saved - find npm packages that could do this for you

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})