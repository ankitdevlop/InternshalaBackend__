const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path=require("path")
const port = process.env.PORT||5000

const router=require('./Routers/index')
const cors=require('cors')
const { connect } = require('./db')

app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
res.send("hello world")
})

// calling api
app.use('/api',router)


connect();
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  req.header("Access-Control-Allow-Origin","*")
  next()
})
app.use("/upload",express.static(path.join(__dirname,'/../uploads')))
// app.use(express.static(path.join(__dirname,"..")))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})