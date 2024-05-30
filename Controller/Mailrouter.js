const mailrouter = require('express').Router();
const nodemailer = require('nodemailer');


mailrouter.post('/', (req, res) => {
    const { email, name, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'billanivash52@gmail.com',
            pass: 'yglubdayulcahfhr'
        }
    });
    const html = `<p>Hi,I am ${name}</p>
    <p>${message}</p>
    
    `

    const mailoption = {
        from:{email},
        to: "billanivash52@gmail.com",
        subject: {subject},
        html:html
    }

    transporter.sendMail(mailoption, (err,info) => {
        if (err)
        {
            console.log(err)
        }
        else {
            console.log(info.response)
        }
    })
    res.status(200).send('Mail sented successfully..')

    

})

module.exports = mailrouter;