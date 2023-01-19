var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'catherine.abernathy9@ethereal.email',
        pass: 'YrgHPynDXkPTYvjfye'
    }
});
transporter.sendMail({
from:'user@gmail.com',
to:'catherine.abernathy9@ethereal.email',
subject:'mail object',
text:'test'
})