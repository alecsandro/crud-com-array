const express = require('express')

const app = express()

app.get('/',function(req,res){
    return res.send('Primeiro COMMIT')
})

app.listen(3000,function(){
    console.log('SERVER STARTED!')
})