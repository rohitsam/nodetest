import connectToDatabase from "./helper/db-helper.js"

import express from "express"
import cors from "cors"
const app = express()
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/fuck', function (req, res) {
    res.send('fuckofff')
  })
  

app.post('/user',async (req,res)=>{

    const connection = await connectToDatabase();
    console.log(connection)
    const usercol = await connection.db("test").collection("potato");
    usercol.insertOne({
        name:req.query.name,
        email:req.query.email
    })
    console.log(req.query.name)
    res.send("succesfully added");

})
app.listen(4000)