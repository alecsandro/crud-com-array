const express = require('express')
// const fs = req

const app = express()
app.use(express.json())

app.get('/projeto', function (req, res) {
    const { nome } = req.query;
    return res.send(`ola seu nome eh ${nome}`)
})

app.post('/projeto', function (req, res) {
    try {
        if (!req.body) {
            return res.send('necessario enviar corpo da Mensagem')
        } else {
            //const { corpo } = req.body;
        }

    } catch (error) {
        console.log(error)        
    }

    return res.send('Tudo certo')
})


app.listen(3000, function () {
    console.log('Server STARTED')
})

