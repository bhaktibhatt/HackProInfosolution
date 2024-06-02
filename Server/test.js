const nodemailer = require("nodemailer");
// require("dotenv").config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "connect.prathmesh905@gmail.com",
        pass: "jvtbsbvqyarlturn",
    },
});

let mailOptions = {
    from: {
        name: "Prathmesh Kale",
        address: "connect.prathmesh905@gmail.com"
    }, // sender address
    to: "bhaktinirbhaybhatt@gmail.com", // list of receivers
    subject: "Nodemailer project testing", // Subject line
    text: "Hello meow TvT", // plain text body
    cc : "connect.prathmeshkale@outlook.com"
}

async function bhejmail() {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
}

bhejmail().catch(console.error);