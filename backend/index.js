const express = require('express');
const ConnectToMongo = require('./db');

const cors = require('cors');

ConnectToMongo()

const app = express();
const port = 5000;

const teacherRouter = require('./Routes/teacherRoute')

app.use(express.json())

app.use(cors())

app.get('/', (req, res) =>{
    res.send('This is GET method')
})

app.use('/api/student',require('./Routes/studentRoute'))

app.use('/api/employee',require('./Routes/employeeRoute'))

app.use('/api/teacher',teacherRouter)

app.listen(port, () =>{
    console.log('App Listening on port '+port)
})