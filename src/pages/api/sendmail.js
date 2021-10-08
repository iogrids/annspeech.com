const nodemailer = require('nodemailer');

async function sendMail(req, res) {
  const { email, fullname, subject, message } = JSON.parse(req.body);
  const fromName = 'Maria';
  const fromEmail = 'maria@annspeech.com';

  console.log(email, fullname, subject, message);
  return;

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.sendgrid.net',
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: {
      name: `${fromName}`,
      address: `${fromEmail}`,
    },
    replyTo: email,
    to: `${email}`,
    subject: `${subject}`,
    text: message,
    html: `${message}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: 'OK' });
}

export default sendMail;
