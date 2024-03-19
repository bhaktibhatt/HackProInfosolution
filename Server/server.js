const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get('/', async(req, res) => {
    try {
        res.status(200)
        res.send("server working")
    } catch (err) {
        console.error(err.message)
    }
})


app.post("/users",  async(req, res) => {
    try {
        let user = req.body
        users.push(user)
        console.log(users)
        res.send("user registered")

    } catch (err) {
        console.error(err.message)
    }
})


app.listen(port, () => {
    console.log(`server has started! at port 5000. http://localhost:${port}/`)
})

const users = []