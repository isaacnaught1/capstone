const express = require('express')
const cors = require('cors')



const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname +'/public'))


const { saveAnswer, deleteAnswer, seeAnswers } = require('./controller')


app.post('/api/answer', saveAnswer)

app.delete('/api/answer/:index', deleteAnswer)

app.get('/api/answer', seeAnswers)




app.listen(4000, console.log('live on 4000'))