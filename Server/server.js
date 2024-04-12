const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const port = 3000

app.use(express.json())
app.use(express.static(__dirname + '/'));
app.use(cors())

mongoose.connect("mongodb+srv://hackpro:hackpropassword@hi-db.d9e3qvw.mongodb.net/HI-DB")
const Registrations = require("./userModal");

app.get('/', (req, res)=> {
    res.send("Server Running at port 3000!")
})

app.get('/registrations', async(req, res) => {
    try {
        let users = await Registrations.find()
        console.log(users);
        res.status(200)
        res.json(users)
    } catch (err) {
        res.status(400)
        console.error(err.message)
    }
})

app.post('/register', async(req, res) => {
    const user = req.body
    console.log(user)
})


app.listen(port, () => {
    console.log(`server has started! at port 3000. http://localhost:${port}/`)
})