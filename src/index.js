const express = require('express')

const app = express()

app.get('/',function(req,res){
    return res.send('Primeiro COMMIT  4' )
})

app.listen(3000,function(){
    console.log('Server STARTED')
})

