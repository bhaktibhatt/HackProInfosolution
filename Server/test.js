const nodemailer = require("nodemailer");
require("dotenv").config()

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

let mailOptions = {
    from: {
        name: "Hackpro Infosolution",
        address: process.env.NODEMAILER_USER
    }, // sender address
    to: "bhaktinirbhaybhatt@gmail.com", // list of receivers
    subject: "Your Registration has been completed!", // Subject line
    text: "Thank you for contacting Hackpro Infosolution. \n \nThis is a confirmation email. We will contact you soon for your course. \n \nHackPro Infosolution Career Development and Training Department is one of the most trusted and by far the largest source for information security training, ethical hacking & cyber security courses providing institute. We have delivered numerous training sessions, workshops, seminars and conferences at various colleges, institutions and have being regularly invited by Engineering Colleges, Organizations, Corporates and Government agencies to speak and distribute knowledge about Cyber Security. \n \n Courses we Provide - \n    ⬢ Ethical Hacking & Cyber Security. \n    ⬢ Certified Penetration Testing. \n    ⬢ Cyber Forensic Investigation. \n    ⬢ Certified Bug Bounty Hunter. \n    ⬢ Computer Networking. \n\n\nThanks and Regards, \n\nMr. Vishwajeet Mali\nHackpro Infosolution\nPune, Maharashtra, India.\nContact Number - +91 7972771883 ",
    cc : "connect.prathmeshkale@outlook.com"
}

async function bhejmail(name, email) {
    let mailOptions = {
        from: {
            name: "Hackpro Infosolution",
            address: process.env.NODEMAILER_USER
        }, // sender address
        to: `${email}`, // list of receivers
        subject: "Your Registration has been completed!", // Subject line
        text: `Hello ${name}!, Thank you for register Hackpro Infosolution. \n \nThis is a confirmation email. We will contact you soon for your course. \n \nHackPro Infosolution Career Development and Training Department is one of the most trusted and by far the largest source for information security training, ethical hacking & cyber security courses providing institute. We have delivered numerous training sessions, workshops, seminars and conferences at various colleges, institutions and have being regularly invited by Engineering Colleges, Organizations, Corporates and Government agencies to speak and distribute knowledge about Cyber Security. \n \n Courses we Provide - \n    ⬢ Ethical Hacking & Cyber Security. \n    ⬢ Certified Penetration Testing. \n    ⬢ Cyber Forensic Investigation. \n    ⬢ Certified Bug Bounty Hunter. \n    ⬢ Computer Networking. \n\n\nThanks and Regards, \n\nMr. Vishwajeet Mali,\nHackpro Infosolution,\nPune, Maharashtra, India.\nContact Number - +91 7972771883 `,
        cc : "connect.prathmeshkale@outlook.com"
    }
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
}

bhejmail("Bhakti Bhatt", "bhaktinirbhaybhatt@gmail.com").catch(console.error);