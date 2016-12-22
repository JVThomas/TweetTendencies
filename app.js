var express = require('express')

var app = express()

app.get('/', (req,resp) =>{
	resp.send('Hello world!')
})

app.listen(3000, () => console.log("The app is listening on port :3000"))