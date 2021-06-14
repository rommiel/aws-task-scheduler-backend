const express = require('express');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const app = express();
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pcziv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority?`

MongoClient.connect(connectionString, { useUnifiedTopology: true})
.then(client => {
    console.log('connected to DB')
})
.catch(error => {
    console.error(error)
})

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})