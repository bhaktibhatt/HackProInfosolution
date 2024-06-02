const express = require("express")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const cors = require("cors")
const app = express()
const port = 3000

dotenv.config();
app.use(express.json())
app.use(express.static(__dirname + '/'));
app.use(cors({ 
    origin : "https://hackproinfosolution.onrender.com",
    methods : ['GET','POST']
}))

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
    console.log(user)
    let result = await checkUser(user)
    if(result) {
        console.log("User not found...Creating new user.")
        addUser(user)
        bhejconfirmationmail(user.name, user.email, user.course).catch(console.error)
        res.status(201)
        res.set('Access-Control-Allow-Origin', 'https://hackproinfosolution.onrender.com');
        res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.redirect('https://hackproinfosolution.onrender.com/SuccessRegistration')
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
    console.log(user)
})


app.listen(port, () => {
    console.log(`Server has started! at port 3000. http://localhost:${port}/ on local and https://hackproinfosolutionserver.onrender.com on cloud.`)
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

//? Sending mails and shit
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});


async function bhejconfirmationmail(toname, toaddress, coursename) {
    let mailOptions = {
        from: {
            name: "Hackpro Infosolution",
            address: process.env.NODEMAILER_USER
        }, // sender address
        to: `${toaddress}`, // list of receivers
        subject: "Your Registration has been completed!", // Subject line
        text: `Hello ${toname}!, Thank you for registering for ${coursename} course here at Hackpro Infosolution. \n \nThis is a confirmation email. We will contact you soon for your course. \n \nHackPro Infosolution Career Development and Training Department is one of the most trusted and by far the largest source for information security training, ethical hacking & cyber security courses providing institute. We have delivered numerous training sessions, workshops, seminars and conferences at various colleges, institutions and have being regularly invited by Engineering Colleges, Organizations, Corporates and Government agencies to speak and distribute knowledge about Cyber Security. \n \n Courses we Provide - \n    ⬢ Ethical Hacking & Cyber Security. \n    ⬢ Certified Penetration Testing. \n    ⬢ Cyber Forensic Investigation. \n    ⬢ Certified Bug Bounty Hunter. \n    ⬢ Computer Networking. \n\n\nThanks and Regards, \n\nMr. Vishwajeet Mali,\nHackpro Infosolution,\nPune, Maharashtra, India.\nContact Number - +91 7972771883 `,
        cc : "connect.prathmeshkale@outlook.com"
    }
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
}