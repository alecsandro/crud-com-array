const express = require('express')
const bodyParserErrorHandler = require('express-body-parser-error-handler')

const app = express()
app.use(express.json())
app.use(bodyParserErrorHandler());

app.get('/projeto', function (req, res) {
    const { nome } = req.query;
    return res.send(`ola seu nome eh ${nome}`)
})

app.post('/projeto', function (req, res) {
    
   // const corpo = req.body.corpo
    return res.send('Tudo certo')
})


app.listen(3000, function () {
    console.log('Server STARTED')
})

