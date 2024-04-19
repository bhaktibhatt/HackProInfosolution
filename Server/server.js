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

app.get('/getregistrations', async(req, res) => {
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
    let result = await checkUser(user)
    if(result) {
        console.log("User not found...Creating new user.")
        addUser(user)
        res.status(201)
        res.redirect('/')
    }
    else {
        console.log("ERR - user found")
        // res.redirect('/signin')
        // 400 - Bad request. Error from client side.
        res.status(400).json({
            "err":"ERR - User already Registered!",
            "code":400
        })
    }
    next();
    console.log(user)
})


app.listen(port, () => {
    console.log(`server has started! at port 3000. http://localhost:${port}/`)
})

async function checkUser(inputuser) {
    try {
        if (await Registrations.findOne({email : inputuser.email}) !== null) {
            return 0
        }
        else {
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}

async function addUser(user) {
    if (user.username !== "" & user.email !== "" & user.phonenumber !== "" & user.password !=="") {
        try {
            await Registrations.create(user)
            console.log("User added successfully", user)      
        } catch (err) {
            console.error(err.message)
        }
    }
} 