const express = require('express')

const app = express()

app.get('/',function(req,res){
    return res.send('Primeiro COMMIT')
})
