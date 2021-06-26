import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


/*const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
 

const connStr="mongodb+srv://newone:newone123@cluster0.pkvoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const localhsot Str=''mongodb://127.0.0.1:27017/feedback''
mongoose.connect(connStr, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error',console.error.bind(console,"error"))
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let mySchema=new mongoose.Schema({
    name:String,
    suggestion:String
})

let Login=mongoose.model('feeds',mySchema)


app.get('/getalluser', async(req,res)=>{
    let result = await Login.find()
    console.log(result);
    res.send(result)
})

app.post("/newuser",async(req,res)=>{
    let x=new Login({
        name:req.body.name,
        suggestion:req.body.suggestion
    })
    let result=await x.save()
    console.log(result);
    res.send(result)
})


app.listen(process.env.PORT || 3000,()=>{
    console.log('connected to port 3000');
})*/
