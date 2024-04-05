const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000

app.use(express.json())
app.use(express.static(__dirname + '/'));
app.use(cors())

const users = [
    {
        name : "prathmesh",
        age : 21,
        email : "prathmesh@email.com"
    },
    {
        name : "bhakti",
        age : 22,
        email : "bhakti@email.com"
    },
    {
        name : "khushi",
        age : 20,
        email : "khushi@email.com"
    },
]

app.get('/api', async(req, res) => {
    try {
        res.status(200)
        res.json(users)
    } catch (err) {
        res.status(400)
        console.error(err.message)
    }
})


app.listen(port, () => {
    console.log(`server has started! at port 5000. http://localhost:${port}/`)
})