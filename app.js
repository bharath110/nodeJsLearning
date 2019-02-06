const path = require('path')
var pathObj = path.parse(__filename)
const logger = require('./logger')
const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write("Here is the data.")
        res.end();
    }
    if(req.url =='/api/books'){
        res.write(JSON.stringify(['Universal','Wings of Fire']))
        res.end();
    }
    
})
server.listen(3000)
console.log('Listening on port 3000...')
/*
fs.readdir('',(err,files)=>{
    if(err) console.log(err)
    else console.log(files)
})*/

//logger.log("FBKJHFDKJF54355")
//logger.log(`Filename : ${__filename} and Dirname : ${__dirname}`)
//console.log(pathObj)

